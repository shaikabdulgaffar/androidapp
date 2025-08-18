package com.app.hundredsunnats;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.OnBackPressedCallback;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.splashscreen.SplashScreen;

import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdView;
import com.google.android.gms.ads.LoadAdError;      // <-- Added (important)
import com.google.android.gms.ads.MobileAds;

/**
 * MainActivity
 * - AndroidX SplashScreen until first page load completes
 * - Local HTML via WebView (assets/index.html)
 * - JS bridge: window.Android.shareText(), rateApp(), getPackageName()
 * - External schemes handled via intents
 * - Banner AdMob test ad loaded (replace IDs for production)
 */
public class MainActivity extends AppCompatActivity {

    private static final String START_URL = "file:///android_asset/index.html";

    private WebView webView;
    private AdView adView;

    private volatile boolean webContentLoaded = false;
    private static final long MIN_SPLASH_DURATION_MS = 0;
    private long splashStartTime;

    private static final boolean LOG_AD_EVENTS = true;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        SplashScreen splashScreen = SplashScreen.installSplashScreen(this);
        super.onCreate(savedInstanceState);

        splashStartTime = System.currentTimeMillis();
        splashScreen.setKeepOnScreenCondition(() ->
                !webContentLoaded ||
                        (System.currentTimeMillis() - splashStartTime) < MIN_SPLASH_DURATION_MS
        );

        setContentView(R.layout.activity_main);

        if (getSupportActionBar() != null) getSupportActionBar().hide();

        MobileAds.initialize(this, initializationStatus -> {
            if (LOG_AD_EVENTS) {
                // Log initialization if needed
            }
        });

        adView = findViewById(R.id.adView);
        loadBannerAd();

        webView = findViewById(R.id.webview);
        setupWebView();

        if (savedInstanceState == null) {
            webView.loadUrl(START_URL);
        } else {
            webView.restoreState(savedInstanceState);
            webContentLoaded = true;
        }

        getOnBackPressedDispatcher().addCallback(this,
                new OnBackPressedCallback(true) {
                    @Override
                    public void handleOnBackPressed() {
                        if (webView != null && webView.canGoBack()) {
                            webView.goBack();
                        } else {
                            setEnabled(false);
                            MainActivity.super.onBackPressed();
                        }
                    }
                });
    }

    /* ================== WebView Setup ================== */
    private void setupWebView() {
        WebSettings ws = webView.getSettings();
        ws.setJavaScriptEnabled(true);
        ws.setDomStorageEnabled(true);
        ws.setDatabaseEnabled(true);
        ws.setAllowFileAccess(true);
        ws.setAllowContentAccess(true);
        ws.setLoadWithOverviewMode(true);
        ws.setUseWideViewPort(true);
        ws.setLoadsImagesAutomatically(true);
        ws.setBuiltInZoomControls(false);
        ws.setDisplayZoomControls(false);
        ws.setCacheMode(WebSettings.LOAD_DEFAULT);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            ws.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);
        }
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
                ws.setAllowFileAccessFromFileURLs(true);
                ws.setAllowUniversalAccessFromFileURLs(true);
            }
        } catch (Throwable ignored) {}

        if (isDebugBuild()) {
            WebView.setWebContentsDebuggingEnabled(true);
        }

        webView.setBackgroundColor(Color.WHITE);
        webView.setWebChromeClient(new WebChromeClient());
        webView.addJavascriptInterface(new AndroidBridge(getApplicationContext()), "Android");

        webView.setWebViewClient(new WebViewClient() {

            @Override
            public void onPageFinished(@NonNull WebView view, @NonNull String url) {
                new Handler(Looper.getMainLooper()).post(() -> webContentLoaded = true);
                super.onPageFinished(view, url);
            }

            // API < 24
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return handleUri(Uri.parse(url));
            }

            // API >= 24
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return handleUri(request.getUrl());
            }

            private boolean handleUri(Uri uri) {
                String scheme = uri.getScheme() != null ? uri.getScheme().toLowerCase() : "";
                if (scheme.equals("file") || scheme.equals("http") || scheme.equals("https")) {
                    return false;
                }
                Intent intent = new Intent(Intent.ACTION_VIEW, uri);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                try {
                    startActivity(intent);
                } catch (ActivityNotFoundException ignored) {}
                return true;
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return super.shouldInterceptRequest(view, request);
            }
        });
    }

    /* ================== Ads ================== */
    private void loadBannerAd() {
        if (adView == null) return;
        AdRequest adRequest = new AdRequest.Builder().build();
        adView.setAdListener(new AdListener() {

            @Override
            public void onAdLoaded() {
                if (LOG_AD_EVENTS) log("Banner loaded");
            }

            // FIXED signature: LoadAdError instead of AdError
            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                if (LOG_AD_EVENTS) log("Banner failed: " + loadAdError.getMessage());
            }

            @Override
            public void onAdOpened() {
                if (LOG_AD_EVENTS) log("Banner opened");
            }

            @Override
            public void onAdClicked() {
                if (LOG_AD_EVENTS) log("Banner clicked");
            }

            @Override
            public void onAdClosed() {
                if (LOG_AD_EVENTS) log("Banner closed");
            }

            @Override
            public void onAdImpression() {
                if (LOG_AD_EVENTS) log("Banner impression");
            }
        });
        adView.loadAd(adRequest);
    }

    private void log(String msg) {
        if (isDebugBuild()) {
            android.util.Log.d("MainActivity", msg);
        }
    }

    /* ================== JS Bridge ================== */
    public static class AndroidBridge {
        private final Context ctx;
        AndroidBridge(Context ctx) { this.ctx = ctx; }

        @JavascriptInterface
        public void shareText(String text) {
            if (text == null || text.trim().isEmpty()) {
                text = "Check out the Hundred Sunnats app.";
            }
            Intent send = new Intent(Intent.ACTION_SEND);
            send.setType("text/plain");
            send.putExtra(Intent.EXTRA_TEXT, text);
            Intent chooser = Intent.createChooser(send, "Share via");
            chooser.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            ctx.startActivity(chooser);
        }

        @JavascriptInterface
        public void rateApp() {
            String pkg = ctx.getPackageName();
            try {
                Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id=" + pkg));
                i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                ctx.startActivity(i);
            } catch (Exception e) {
                Intent i = new Intent(Intent.ACTION_VIEW,
                        Uri.parse("https://play.google.com/store/apps/details?id=" + pkg));
                i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                ctx.startActivity(i);
            }
        }

        @JavascriptInterface
        public String getPackageName() {
            return ctx.getPackageName();
        }
    }

    /* ================== Helpers ================== */
    private boolean isDebugBuild() {
        return (getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
    }

    /* ================== State Persistence ================== */
    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        if (webView != null) {
            webView.saveState(outState);
        }
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onRestoreInstanceState(@NonNull Bundle state) {
        super.onRestoreInstanceState(state);
        if (webView != null) {
            webView.restoreState(state);
            webContentLoaded = true;
        }
    }

    /* ================== Lifecycle ================== */
    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) webView.onResume();
        if (adView != null) adView.resume();
    }

    @Override
    protected void onPause() {
        if (webView != null) webView.onPause();
        if (adView != null) adView.pause();
        super.onPause();
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        if (adView != null) {
            adView.destroy();
            adView = null;
        }
        if (webView != null) {
            try {
                webView.loadUrl("about:blank");
                webView.stopLoading();
                webView.setWebChromeClient(null);
                webView.setWebViewClient(null);
                webView.destroy();
            } catch (Exception ignored) {}
            webView = null;
        }
        super.onDestroy();
    }
}