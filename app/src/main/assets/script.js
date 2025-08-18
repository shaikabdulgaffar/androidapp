class HundredSunnatsApp {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.completedSunnats = JSON.parse(localStorage.getItem('completedSunnats')) || [];
        this.currentTheme = localStorage.getItem('theme') || 'light';

        this.sunnatsData = {
            eating: [
                { id: 1, text: "Sit and eat on the floor.", arabic: "", transliteration: "", translation: "" },
                { id: 2, text: "Spread a cloth (dastarkhwan) before eating.", arabic: "", transliteration: "", translation: "" },
                { id: 3, text: "Wash both hands up to the wrists before eating.", arabic: "", transliteration: "", translation: "" },
                { id: 4, text: "Begin with the remembrance of Allah; say 'Bismillah wa 'ala barakatillah' audibly.", arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ", transliteration: "Bismillāhi wa 'alā barakatillāh", translation: "In the name of Allah and upon the blessing of Allah." },
                { id: 5, text: "Eat with the right hand.", arabic: "", transliteration: "", translation: "" },
                { id: 6, text: "Eat from what is in front of you.", arabic: "", transliteration: "", translation: "" },
                { id: 7, text: "If a morsel falls, pick it up, clean it, and eat it.", arabic: "", transliteration: "", translation: "" },
                { id: 8, text: "Do not lean while eating.", arabic: "", transliteration: "", translation: "" },
                { id: 9, text: "Do not find fault with the food.", arabic: "", transliteration: "", translation: "" },
                { id: 10, text: "Remove your shoes before eating.", arabic: "", transliteration: "", translation: "" },
                { id: 11, text: "Sit in a modest posture: both knees on the ground, or one knee raised, or both lightly raised.", arabic: "", transliteration: "", translation: "" },
                { id: 12, text: "Clean your plate and utensils thoroughly after eating.", arabic: "", transliteration: "", translation: "" },
                { id: 13, text: "Recite the dua after eating.", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ", transliteration: "Alhamdu lillāhi alladhī aṭ'amanā wa saqānā wa ja'alanā mina-l-muslimīn.", translation: "All praise is for Allah who fed us and gave us drink and made us among the Muslims." },
                { id: 14, text: "First remove/clear the food items, then get up.", arabic: "", transliteration: "", translation: "" },
                { id: 15, text: "After meals, wash both hands.", arabic: "", transliteration: "", translation: "" },
                { id: 16, text: "Gargle/rinse the mouth.", arabic: "", transliteration: "", translation: "" },
                { id: 17, text: "Avoid remaining completely silent; speak politely when needed.", arabic: "", transliteration: "", translation: "" },
                { id: 18, text: "Eat with three fingers if possible.", arabic: "", transliteration: "", translation: "" },
                { id: 19, text: "Do not eat very hot food.", arabic: "", transliteration: "", translation: "" },
                { id: 20, text: "Do not blow on the food.", arabic: "", transliteration: "", translation: "" },
                { id: 21, text: "Lick your fingers after eating.", arabic: "", transliteration: "", translation: "" }
            ],
            drinking: [
                { id: 22, text: "Drink with the right hand (Shayṭān drinks with the left hand).", arabic: "", transliteration: "", translation: "" },
                { id: 23, text: "Sit and drink.", arabic: "", transliteration: "", translation: "" },
                { id: 24, text: "Say 'Bismillah' before drinking.", arabic: "بِسْمِ اللَّهِ", transliteration: "Bismillāh", translation: "In the name of Allah." },
                { id: 25, text: "Say 'Alhamdulillah' after drinking.", arabic: "الْحَمْدُ لِلَّهِ", transliteration: "Alhamdulillāh", translation: "All praise is for Allah." },
                { id: 26, text: "Drink in three sips, removing the vessel from the mouth between sips.", arabic: "", transliteration: "", translation: "" },
                { id: 27, text: "Do not drink directly from a jug or bottle; pour into a cup/glass first.", arabic: "", transliteration: "", translation: "" }
            ],
            sleeping: [
                { id: 28, text: "Discuss beneficial matters of Dīn with family before sleeping.", arabic: "", transliteration: "", translation: "" },
                { id: 29, text: "Perform wuḍū' before sleeping.", arabic: "", transliteration: "", translation: "" },
                { id: 30, text: "Make your bed yourself.", arabic: "", transliteration: "", translation: "" },
                { id: 31, text: "Dust/brush the bed three times before lying down.", arabic: "", transliteration: "", translation: "" },
                { id: 32, text: "Change into sleep clothes (e.g., pajamas).", arabic: "", transliteration: "", translation: "" },
                { id: 33, text: "It is Sunnah to sleep soon after the 'Ishā prayer.", arabic: "", transliteration: "", translation: "" },
                { id: 34, text: "Apply surmah (kohl) in both eyes.", arabic: "", transliteration: "", translation: "" },
                { id: 35, text: "Use a miswāk to brush the teeth.", arabic: "", transliteration: "", translation: "" },
                { id: 36, text: "Sleep on the right side.", arabic: "", transliteration: "", translation: "" },
                { id: 37, text: "Place the right palm under the right cheek.", arabic: "", transliteration: "", translation: "" },
                { id: 38, text: "Keep the knees slightly bent when sleeping.", arabic: "", transliteration: "", translation: "" },
                { id: 39, text: "Refrain from sleeping on the stomach.", arabic: "", transliteration: "", translation: "" },
                { id: 40, text: "Sleeping on a bed or on the floor are both Sunnah.", arabic: "", transliteration: "", translation: "" },
                { id: 41, text: "Face the Qiblah.", arabic: "", transliteration: "", translation: "" },
                { id: 42, text: "Recite Sūrah al-Mulk before sleeping.", arabic: "", transliteration: "", translation: "" },
                { id: 43, text: "Recite Āyat al-Kursī.", arabic: "", transliteration: "", translation: "" },
                { id: 44, text: "Recite Sūrah al-Ikhlāṣ, Sūrah al-Falaq, and Sūrah an-Nās three times, then blow over the body thrice.", arabic: "", transliteration: "", translation: "" },
                { id: 45, text: "Recite Tasbīḥ Fāṭimī: 33× Subḥānallāh, 33× Alḥamdulillāh, 34× Allāhu Akbar.", arabic: "سُبْحَانَ اللَّهِ - الْحَمْدُ لِلَّهِ - اللَّهُ أَكْبَرُ", transliteration: "Subḥānallāh - Alḥamdulillāh - Allāhu Akbar", translation: "Glory be to Allah - All praise is for Allah - Allah is the Greatest" },
                { id: 46, text: "Recite the dua before sleeping.", arabic: "اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا", transliteration: "Allāhumma bismika amūtu wa aḥyā.", translation: "O Allah, in Your name I die and I live." }
            ],
            awakening: [
                { id: 47, text: "Rub the face and eyes with the palms to remove the effects of sleep.", arabic: "", transliteration: "", translation: "" },
                { id: 48, text: "On opening the eyes, say 'Alhamdulillah' three times and recite the Kalimah Ṭayyibah.", arabic: "الْحَمْدُ لِلَّهِ - لَا إِلَهَ إِلَّا اللَّهُ", transliteration: "Alhamdulillāh - Lā ilāha illallāh", translation: "All praise is for Allah - There is no god but Allah" },
                { id: 49, text: "Recite the dua for awakening.", arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ", transliteration: "Alhamdu lillāhi alladhī aḥyānā ba'da mā amātanā wa ilayhi-n-nushūr.", translation: "All praise is for Allah who gave us life after causing us to die, and to Him is the resurrection." },
                { id: 50, text: "Cleanse the mouth with a miswāk.", arabic: "", transliteration: "", translation: "" }
            ],
            clothing: [
                { id: 51, text: "The Prophet (ﷺ) loved white clothing.", arabic: "", transliteration: "", translation: "" },
                { id: 52, text: "When putting on any garment, begin with the right side/limb.", arabic: "", transliteration: "", translation: "" },
                { id: 53, text: "When removing any garment, remove the left side/limb first.", arabic: "", transliteration: "", translation: "" },
                { id: 54, text: "Men should keep their lower garment above the ankles; women should ensure their lower garment covers the ankles.", arabic: "", transliteration: "", translation: "" },
                { id: 55, text: "Men should wear a cap (ṭopī) or turban; women should wear a scarf (ḥijāb).", arabic: "", transliteration: "", translation: "" },
                { id: 56, text: "When wearing shoes, put on the right shoe first; when removing, take off the left shoe first.", arabic: "", transliteration: "", translation: "" },
                { id: 57, text: "Recite the dua for a new garment.", arabic: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ", transliteration: "Alhamdu lillāhi alladhī kasānī hādhā wa razaqanīhi min ghayri ḥawlin minnī wa lā quwwah.", translation: "All praise is for Allah who clothed me with this and provided it for me without any might or power from myself." }
            ],
            toilet: [
                { id: 58, text: "Enter with the head covered.", arabic: "", transliteration: "", translation: "" },
                { id: 59, text: "Enter with footwear.", arabic: "", transliteration: "", translation: "" },
                { id: 60, text: "Recite the dua before entering.", arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ", transliteration: "Allāhumma innī a'ūdhu bika minal-khubthi wal-khabā'ith.", translation: "O Allah, I seek refuge with You from male and female devils (all evil and filth)." },
                { id: 61, text: "Enter with the left foot first.", arabic: "", transliteration: "", translation: "" },
                { id: 62, text: "Sit to urinate; do not urinate standing.", arabic: "", transliteration: "", translation: "" },
                { id: 63, text: "Exit with the right foot.", arabic: "", transliteration: "", translation: "" },
                { id: 64, text: "Recite the dua after exiting.", arabic: "غُفْرَانَكَ", transliteration: "Ghufrānak.", translation: "Your forgiveness (I seek)." },
                { id: 65, text: "Do not face or turn your back to the Qiblah.", arabic: "", transliteration: "", translation: "" },
                { id: 66, text: "Do not speak in the toilet.", arabic: "", transliteration: "", translation: "" },
                { id: 67, text: "Be extremely cautious of splashes of urine.", arabic: "", transliteration: "", translation: "" },
                { id: 68, text: "Cleanse with water (istinjā').", arabic: "", transliteration: "", translation: "" }
            ],
            home: [
                { id: 69, text: "Recite the dua before entering the home.", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا", transliteration: "Allāhumma innī as'aluka khayra-l-mawliji wa khayra-l-makharaj; bismillāhi walajnā wa bismillāhi kharajnā, wa 'alā-llāhi rabbinā tawakkalnā.", translation: "O Allah, I ask You for the goodness of entering and the goodness of leaving. In the name of Allah we enter, and in the name of Allah we leave, and upon Allah, our Lord, we place our trust." },
                { id: 70, text: "Greet those inside with 'As-salāmu 'alaykum.'", arabic: "السَّلَامُ عَلَيْكُمْ", transliteration: "As-salāmu 'alaykum", translation: "Peace be upon you" },
                { id: 71, text: "Announce your arrival (e.g., by greeting, coughing, etc.), even at your own house.", arabic: "", transliteration: "", translation: "" }
            ],
            miscellaneous: [
                { id: 72, text: "Use a miswāk regularly, especially before wuḍū' and ṣalāh.", arabic: "", transliteration: "", translation: "" },
                { id: 73, text: "Bathe on Friday (ghusl al-jumu'ah).", arabic: "", transliteration: "", translation: "" },
                { id: 74, text: "Apply fragrance/'itr (for men).", arabic: "", transliteration: "", translation: "" },
                { id: 75, text: "Show mercy to those younger than you.", arabic: "", transliteration: "", translation: "" },
                { id: 76, text: "Visit the sick.", arabic: "", transliteration: "", translation: "" },
                { id: 77, text: "Be good to neighbors.", arabic: "", transliteration: "", translation: "" },
                { id: 78, text: "Meet fellow Muslims with a cheerful face.", arabic: "", transliteration: "", translation: "" },
                { id: 79, text: "Care for the poor and needy.", arabic: "", transliteration: "", translation: "" },
                { id: 80, text: "Maintain family ties (ṣilat ar-raḥim).", arabic: "", transliteration: "", translation: "" },
                { id: 81, text: "Honor guests, regardless of their status.", arabic: "", transliteration: "", translation: "" },
                { id: 82, text: "Greet all Muslims: 'As-salāmu 'alaykum wa raḥmatullāhi wa barakātuh.'", arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ", transliteration: "As-salāmu 'alaykum wa raḥmatullāhi wa barakātuh", translation: "Peace be upon you and the mercy of Allah and His blessings" },
                { id: 83, text: "Keep your gaze lowered while walking.", arabic: "", transliteration: "", translation: "" },
                { id: 84, text: "Respect elders.", arabic: "", transliteration: "", translation: "" },
                { id: 85, text: "Ponder over Allah and His creation.", arabic: "", transliteration: "", translation: "" },
                { id: 86, text: "Men should keep a beard at least a fist-length.", arabic: "", transliteration: "", translation: "" },
                { id: 87, text: "Speak softly and politely.", arabic: "", transliteration: "", translation: "" },
                { id: 88, text: "Enjoin good.", arabic: "", transliteration: "", translation: "" },
                { id: 89, text: "Forbid evil.", arabic: "", transliteration: "", translation: "" },
                { id: 90, text: "Carry your shoes in the left hand when necessary.", arabic: "", transliteration: "", translation: "" },
                { id: 91, text: "Make wuḍū' at home before going to the masjid.", arabic: "", transliteration: "", translation: "" },
                { id: 92, text: "Enter the masjid with the right foot.", arabic: "بِسْمِ اللَّهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", transliteration: "Bismillāh, waṣ-ṣalātu was-salāmu 'alā Rasūlillāh. Allāhumma iftaḥ lī abwāba raḥmatik.", translation: "In the name of Allah, and blessings and peace be upon the Messenger of Allah. O Allah, open for me the doors of Your mercy." },
                { id: 93, text: "Leave the masjid with the left foot.", arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", transliteration: "Allāhumma innī as'aluka min faḍlik.", translation: "O Allah, I ask You from Your bounty." },
                { id: 94, text: "Recite some portion of the Qur'an daily.", arabic: "", transliteration: "", translation: "" },
                { id: 95, text: "Be hospitable towards guests.", arabic: "", transliteration: "", translation: "" },
                { id: 96, text: "Exchange gifts.", arabic: "", transliteration: "", translation: "" },
                { id: 97, text: "Make dua to Allah for your needs in any language.", arabic: "", transliteration: "", translation: "" },
                { id: 98, text: "Consult parents, teachers, or elders before undertaking important tasks.", arabic: "", transliteration: "", translation: "" },
                { id: 99, text: "Respect and serve one's parents.", arabic: "", transliteration: "", translation: "" },
                { id: 100, text: "Wake up for Tahajjud if possible.", arabic: "", transliteration: "", translation: "" }
            ]
        };

        this.translations = {
            en: {
                appTitle: "Hundred Sunnats",
                menu: "Menu",
                home: "Home",
                darkMode: "Dark Mode",
                changeLanguage: "Change Language",
                aboutApp: "About This App",
                rateApp: "Rate This App",
                shareApp: "Share This App",
                aboutUs: "About Us",
                welcomeTitle: "Welcome to Hundred Sunnats",
                welcomeDesc: "Follow the beautiful Sunnats of Prophet Muhammad (ﷺ) in your daily life. Track your progress as you implement these blessed practices.",
                eatingCategory: "Sunnahs of Eating",
                drinkingCategory: "Sunnahs of Drinking",
                sleepingCategory: "Sunnahs of Sleeping",
                awakeningCategory: "Sunnahs on Awakening",
                clothingCategory: "Sunnahs when Wearing Clothes",
                toiletCategory: "Sunnahs of the Toilet",
                homeCategory: "Sunnahs of the Home",
                miscellaneousCategory: "Miscellaneous Sunnahs",
                selectLanguage: "Select Language",
                version: "Version",
                developer: "Developer",
                aboutAppDesc: "Hundred Sunnats is a comprehensive app designed to help Muslims follow the beautiful Sunnah of Prophet Muhammad (ﷺ). Track your daily progress and implement these blessed practices in your life.",
                aboutUsDesc: "We are dedicated to creating Islamic applications that help Muslims worldwide practice their faith with ease and convenience. Our mission is to make Islamic knowledge accessible to everyone."
            },
            ur: {
                appTitle: "سو سنتیں",
                menu: "مینو",
                home: "گھر",
                darkMode: "ڈارک موڈ",
                changeLanguage: "زبان تبدیل کریں",
                aboutApp: "اس ایپ کے بارے میں",
                rateApp: "ایپ کو ریٹ کریں",
                shareApp: "ایپ شیئر کریں",
                aboutUs: "ہمارے بارے میں",
                welcomeTitle: "سو سنتوں میں خوش آمدید",
                welcomeDesc: "اپنی روزمرہ زندگی میں نبی کریم ﷺ کی خوبصورت سنتوں پر عمل کریں۔ ان مبارک اعمال پر عمل کرتے ہوئے اپنی پیش قدمی کو ٹریک کریں۔",
                eatingCategory: "کھانے کی سنتیں",
                drinkingCategory: "پینے کی سنتیں",
                sleepingCategory: "سونے کی سنتیں",
                awakeningCategory: "بیدار ہونے کی سنتیں",
                clothingCategory: "لباس پہننے کی سنتیں",
                toiletCategory: "بیت الخلاء کی سنتیں",
                homeCategory: "گھر کی سنتیں",
                miscellaneousCategory: "متفرق سنتیں",
                selectLanguage: "زبان منتخب کریں",
                version: "ورژن",
                developer: "ڈویلپر",
                aboutAppDesc: "سو سنتیں ایک جامع ایپ ہے جو مسلمانوں کو نبی کریم ﷺ کی خوبصورت سنت پر عمل کرنے میں مدد کرنے کے لیے بنائی گئی ہے۔",
                aboutUsDesc: "ہم اسلامی ایپلیکیشنز بنانے کے لیے وقف ہیں جو دنیا بھر کے مسلمانوں کو آسانی اور سہولت سے اپنے دین پر عمل کرنے میں مدد کرتی ہیں۔"
            },
            ar: {
                appTitle: "مائة سنة",
                menu: "القائمة",
                home: "الرئيسية",
                darkMode: "الوضع المظلم",
                changeLanguage: "تغيير اللغة",
                aboutApp: "حول هذا التطبيق",
                rateApp: "قيم التطبيق",
                shareApp: "شارك التطبيق",
                aboutUs: "من نحن",
                welcomeTitle: "مرحباً بكم في مائة سنة",
                welcomeDesc: "اتبع السنن الجميلة للنبي محمد ﷺ في حياتك اليومية. تتبع تقدمك في تطبيق هذه الممارسات المباركة.",
                eatingCategory: "سنن الطعام",
                drinkingCategory: "سنن الشرب",
                sleepingCategory: "سنن النوم",
                awakeningCategory: "سنن الاستيقاظ",
                clothingCategory: "سنن اللباس",
                toiletCategory: "سنن دخول الخلاء",
                homeCategory: "سنن البيت",
                miscellaneousCategory: "سنن متنوعة",
                selectLanguage: "اختر اللغة",
                version: "الإصدار",
                developer: "المطور",
                aboutAppDesc: "مائة سنة تطبيق شامل مصمم لمساعدة المسلمين على اتباع سنة النبي محمد ﷺ الجميلة.",
                aboutUsDesc: "نحن مكرسون لإنشاء تطبيقات إسلامية تساعد المسلمين في جميع أنحاء العالم على ممارسة دينهم بسهولة وراحة."
            }
        };

        this.init();
    }

    init() {
        this.setTheme();
        this.setLanguage();
        this.bindEvents();
        this.updateProgress();
        this.updateCategoryProgress();
        this.updateProgressDisplay(); // Add this line
    }

    bindEvents() {
        // Hamburger menu
        document.getElementById('hamburgerBtn').addEventListener('click', () => {
            this.toggleSidebar();
        });

        document.getElementById('closeSidebar').addEventListener('click', () => {
            this.closeSidebar();
        });

        // Overlay click to close sidebar
        document.getElementById('overlay').addEventListener('click', () => {
            this.closeSidebar();
            this.closeAllModals();
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('change', (e) => {
            this.toggleTheme();
        });

        // Language button
        document.getElementById('languageBtn').addEventListener('click', () => {
            this.openModal('languageModal');
        });

        // About app button
        document.getElementById('aboutAppBtn').addEventListener('click', () => {
            this.openModal('aboutAppModal');
        });

        // About us button
        document.getElementById('aboutUsBtn').addEventListener('click', () => {
            this.openModal('aboutUsModal');
        });

        // Rate app button
        document.getElementById('rateAppBtn').addEventListener('click', () => {
            this.rateApp();
        });

        // Share app button
        document.getElementById('shareAppBtn').addEventListener('click', () => {
            this.shareApp();
        });

        // Language selection
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.changeLanguage(e.target.dataset.lang);
            });
        });

        // Close modal buttons
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.closeModal(e.target.dataset.modal);
            });
        });

        // Category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.showCategoryDetail(category);
            });
        });

        // Back button
        document.getElementById('backBtn').addEventListener('click', () => {
            this.hideCategoryDetail();
        });
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme();
        localStorage.setItem('theme', this.currentTheme);
    }

    setTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        document.getElementById('themeToggle').checked = this.currentTheme === 'dark';
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.setLanguage();
        localStorage.setItem('language', lang);
        this.closeModal('languageModal');

        // Update active language button
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

        // Set text direction for RTL languages
        if (lang === 'ar' || lang === 'ur') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.removeAttribute('dir');
        }
    }

    setLanguage() {
        const translations = this.translations[this.currentLanguage];

        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }

    openModal(modalId) {
        this.closeSidebar();
        const modal = document.getElementById(modalId);
        const overlay = document.getElementById('overlay');

        modal.classList.add('active');
        overlay.classList.add('active');
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        const overlay = document.getElementById('overlay');

        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
        });
    }

    rateApp() {
        // This would typically open the app store or play store
        // For Android WebView, you can call a JavaScript interface
        if (window.AndroidInterface) {
            window.AndroidInterface.rateApp();
        } else {
            alert('Thank you for wanting to rate our app!');
        }
        this.closeSidebar();
    }

    shareApp() {
        // Prefer native Android interface
        if (window.AndroidInterface && typeof window.AndroidInterface.shareApp === 'function') {
            try {
                window.AndroidInterface.shareApp();
            } catch (e) {
                console.error('Android share failed:', e);
            }
        } else if (navigator.share) {
            // Web Share API (won't show extra alert)
            navigator.share({
                title: 'Hundred Sunnats',
                text: 'Follow the beautiful Sunnats of Prophet Muhammad (ﷺ)',
                url: window.location.href
            }).catch(err => {
                // User cancelled or error
                console.log('Share dismissed:', err);
            });
        } else {
            // Silent fallback (no alert popup)
            console.log('Share not supported on this platform.');
        }
        this.closeSidebar();
    }

    showCategoryDetail(category) {
        const categoryDetail = document.getElementById('categoryDetail');
        const mainContent = document.getElementById('mainContent');
        const categoryTitle = document.getElementById('categoryTitle');
        const sunnatsList = document.getElementById('sunnatsList');

        // Set category title
        const titles = {
            eating: 'Sunnahs of Eating',
            drinking: 'Sunnahs of Drinking',
            sleeping: 'Sunnahs of Sleeping',
            awakening: 'Sunnahs on Awakening',
            clothing: 'Sunnahs when Wearing Clothes',
            toilet: 'Sunnahs of the Toilet',
            home: 'Sunnahs of the Home',
            miscellaneous: 'Miscellaneous Sunnahs'
        };

        categoryTitle.textContent = titles[category];

        // Generate sunnats list
        const sunnats = this.sunnatsData[category];
        let html = '';

        sunnats.forEach(sunnat => {
            const isCompleted = this.completedSunnats.includes(sunnat.id);
            html += `
                <div class="sunnat-item">
                    <div class="sunnat-header">
                        <div class="sunnat-number">${sunnat.id}</div>
                        <div class="sunnat-content">
                            <div class="sunnat-text">${sunnat.text}</div>
                            ${sunnat.arabic ? `<div class="sunnat-arabic">${sunnat.arabic}</div>` : ''}
                            ${sunnat.transliteration ? `<div class="sunnat-transliteration">${sunnat.transliteration}</div>` : ''}
                            ${sunnat.translation ? `<div class="sunnat-translation">${sunnat.translation}</div>` : ''}
                        </div>
                        <div class="sunnat-checkbox">
                            <input type="checkbox" id="sunnat-${sunnat.id}" ${isCompleted ? 'checked' : ''}
                                   onchange="app.toggleSunnat(${sunnat.id})">
                        </div>
                    </div>
                </div>
            `;
        });

        sunnatsList.innerHTML = html;

        // Show category detail
        categoryDetail.style.display = 'block';
        mainContent.style.display = 'none';
    }

    hideCategoryDetail() {
        const categoryDetail = document.getElementById('categoryDetail');
        const mainContent = document.getElementById('mainContent');

        categoryDetail.style.display = 'none';
        mainContent.style.display = 'block';
    }

    toggleSunnat(sunnatId) {
        const index = this.completedSunnats.indexOf(sunnatId);

        if (index > -1) {
            this.completedSunnats.splice(index, 1);
        } else {
            this.completedSunnats.push(sunnatId);
        }

        localStorage.setItem('completedSunnats', JSON.stringify(this.completedSunnats));
        this.updateProgress();
        this.updateCategoryProgress();
        this.updateProgressDisplay(); // Add this line

        // Add celebration effect for completion
        if (this.completedSunnats.length === 100) {
            this.celebrateCompletion();
        }
    }

    updateProgress() {
        const progressCount = document.getElementById('progressCount');
        if (progressCount) {
            progressCount.textContent = `${this.completedSunnats.length}/100`;
        }
    }

    updateCategoryProgress() {
        const categories = Object.keys(this.sunnatsData);

        categories.forEach(category => {
            const sunnats = this.sunnatsData[category];
            const completedInCategory = sunnats.filter(sunnat =>
                this.completedSunnats.includes(sunnat.id)
            ).length;

            const percentage = (completedInCategory / sunnats.length) * 100;
            const progressBar = document.querySelector(`[data-category="${category}"] .progress-fill`);

            if (progressBar) {
                progressBar.style.width = `${percentage}%`;
            }
        });
    }

    updateProgressDisplay() {
        const completedCount = this.completedSunnats.length; // Use class property
        const totalCount = 100;
        const percentage = Math.round((completedCount / totalCount) * 100);

        // Update top bar progress
        const progressCountElement = document.getElementById('progressCount');
        if (progressCountElement) {
            progressCountElement.textContent = `${completedCount}/${totalCount}`;
        }

        // Update sidebar progress circle
        const progressRing = document.getElementById('progressRing');
        const progressText = document.getElementById('progressText');

        if (progressRing && progressText) {
            const circumference = 2 * Math.PI * 20; // radius = 20
            const strokeDasharray = (percentage / 100) * circumference;

            progressRing.style.strokeDasharray = `${strokeDasharray} ${circumference}`;
            progressText.textContent = `${percentage}%`;
        }
    }

    celebrateCompletion() {
        // Create celebration modal or effect
        const celebrationModal = document.createElement('div');
        celebrationModal.className = 'modal active';
        celebrationModal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎉 Congratulations! 🎉</h3>
                </div>
                <div class="modal-body" style="text-align: center;">
                    <h4>MashaAllah!</h4>
                    <p>You have completed all 100 Sunnats! May Allah accept your efforts and grant you success in following the beautiful way of Prophet Muhammad (ﷺ).</p>
                    <p style="font-style: italic; color: var(--primary-color);">
                        "Whoever revives my Sunnah when my community becomes corrupt will have the reward of a hundred martyrs." - Prophet Muhammad (ﷺ)
                    </p>
                    <button onclick="this.closest('.modal').remove(); document.getElementById('overlay').classList.remove('active');"
                            style="background: var(--primary-color); color: white; padding: 12px 24px; border: none; border-radius: 6px; margin-top: 20px; cursor: pointer;">
                        Alhamdulillah
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(celebrationModal);
        document.getElementById('overlay').classList.add('active');

        // Add confetti effect (simple version)
        this.createConfetti();
    }

    createConfetti() {
        const colors = ['#2E7D32', '#4CAF50', '#FFC107', '#FF9800', '#F44336'];

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    top: -10px;
                    left: ${Math.random() * 100}%;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    z-index: 9999;
                    animation: fall 3s linear forwards;
                    border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                `;

                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 100);
        }

        // Add CSS animation
        if (!document.getElementById('confetti-style')) {
            const style = document.createElement('style');
            style.id = 'confetti-style';
            style.textContent = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Reset progress (for testing or user request)
    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.completedSunnats = [];
            localStorage.removeItem('completedSunnats');
            this.updateProgress();
            this.updateCategoryProgress();

            // Update checkboxes if category detail is open
            document.querySelectorAll('input[type="checkbox"][id^="sunnat-"]').forEach(checkbox => {
                checkbox.checked = false;
            });
        }
    }

    // Export progress (for backup)
    exportProgress() {
        const data = {
            completedSunnats: this.completedSunnats,
            exportDate: new Date().toISOString(),
            totalCompleted: this.completedSunnats.length
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `hundred-sunnats-progress-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Import progress (for restore)
    importProgress(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.completedSunnats && Array.isArray(data.completedSunnats)) {
                    this.completedSunnats = data.completedSunnats;
                    localStorage.setItem('completedSunnats', JSON.stringify(this.completedSunnats));
                    this.updateProgress();
                    this.updateCategoryProgress();
                    alert('Progress imported successfully!');
                } else {
                    alert('Invalid file format!');
                }
            } catch (error) {
                alert('Error reading file!');
            }
        };
        reader.readAsText(file);
    }

    // Get statistics
    getStatistics() {
        const total = 100;
        const completed = this.completedSunnats.length;
        const percentage = Math.round((completed / total) * 100);

        const categoryStats = {};
        Object.keys(this.sunnatsData).forEach(category => {
            const sunnats = this.sunnatsData[category];
            const completedInCategory = sunnats.filter(sunnat =>
                this.completedSunnats.includes(sunnat.id)
            ).length;

            categoryStats[category] = {
                total: sunnats.length,
                completed: completedInCategory,
                percentage: Math.round((completedInCategory / sunnats.length) * 100)
            };
        });

        return {
            total,
            completed,
            percentage,
            remaining: total - completed,
            categoryStats
        };
    }

    // Search functionality
    searchSunnats(query) {
        if (!query) return [];

        const results = [];
        Object.keys(this.sunnatsData).forEach(category => {
            this.sunnatsData[category].forEach(sunnat => {
                if (sunnat.text.toLowerCase().includes(query.toLowerCase()) ||
                    (sunnat.arabic && sunnat.arabic.includes(query)) ||
                    (sunnat.transliteration && sunnat.transliteration.toLowerCase().includes(query.toLowerCase())) ||
                    (sunnat.translation && sunnat.translation.toLowerCase().includes(query.toLowerCase()))) {
                    results.push({
                        ...sunnat,
                        category
                    });
                }
            });
        });

        return results;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Disable context menu (right-click menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });

    // Disable text selection
    document.addEventListener('selectstart', (e) => {
        e.preventDefault();
        return false;
    });

    // Disable drag
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });

    // Disable long touch/press
    let touchTimer;
    document.addEventListener('touchstart', (e) => {
        touchTimer = setTimeout(() => {
            e.preventDefault();
        }, 500);
    });

    document.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
    });

    document.addEventListener('touchmove', () => {
        clearTimeout(touchTimer);
    });

    // Disable pinch & double-tap zoom (Android WebView / mobile browsers)
    (function () {
        // Block multi-touch (pinch)
        document.addEventListener('touchstart', function (e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        // Prevent double-tap zoom
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function (e) {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });

        // iOS Safari gesture events (safe no-op on Android)
        ['gesturestart', 'gesturechange', 'gestureend'].forEach(evt => {
            document.addEventListener(evt, function (e) {
                e.preventDefault();
            });
        });
    })();

    // Initialize app
    window.app = new HundredSunnatsApp();
});

// Handle Android back button (if WebView provides this interface)
if (window.AndroidInterface && window.AndroidInterface.onBackPressed) {
    document.addEventListener('backbutton', () => {
        const categoryDetail = document.getElementById('categoryDetail');
        const sidebar = document.getElementById('sidebar');
        const activeModal = document.querySelector('.modal.active');

        if (activeModal) {
            window.app.closeAllModals();
            document.getElementById('overlay').classList.remove('active');
        } else if (sidebar.classList.contains('active')) {
            window.app.closeSidebar();
        } else if (categoryDetail.style.display === 'block') {
            window.app.hideCategoryDetail();
        } else {
            // Let the app handle the back button (close app)
            window.AndroidInterface.onBackPressed();
        }
    });
}

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Prevent zoom on mobile devices
document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
});

document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
});

document.addEventListener('gestureend', (e) => {
    e.preventDefault();
});