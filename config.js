/* config.js -- Appelboom v7 Settings - الإصدار المحدث للجوال
   ===========================================================
   🎯 هذا الملف يحتوي على كل الإعدادات التي يمكن تعديلها
   🚀 غير أي إعداد وشاهد التغييرات فوراً في اللعبة
   📝 تم تصميمه للعمل مع index.html المحدث للجوال
*/

const settings = {
  
  // ========== 🖼️ قسم الصور ==========
  images: {
    background: "assets/images/background.JPG",   // خلفية اللعبة
    tree: "assets/images/tree.png",               // صورة الشجرة
    apple: "assets/images/apple.png",             // التفاحة العادية
    appleTransparent: "assets/images/apple_transparent.png", // التفاحة الشفافة
    crowdFail: "assets/images/crowd_fail.jpg",    // صورة الخسارة
    crowdWin: "assets/images/crowd_win.jpg",      // صورة الفوز
    winImage: "assets/images/win.jpg"             // صورة إضافية
  },

  // ========== 🔊 قسم الأصوات ==========
  sounds: {
    birds: "assets/sounds/birds.mp3",            // خلفية الطيور
    click: "assets/sounds/click1.mp3",           // صوت النقر
    fallWhistle: "assets/sounds/fall_whistle.mp3", // صوت سقوط التفاحة
    impact: "assets/sounds/impact.mp3",         // صوت الاصطدام
    slide: "assets/sounds/slide.mp3",           // صوت الانزلاق
    successList: [                               // أصوات النجاح
      "assets/sounds/success1.mp3",
      "assets/sounds/success2.mp3"
    ],
    failList: [                                  // أصوات الفشل
      "assets/sounds/fail1.mp3",
      "assets/sounds/fail2.mp3"
    ],
    successMessage: "assets/sounds/success_message.mp3", // رسالة النجاح
    failMessage: "assets/sounds/fail_message.mp3"        // رسالة الفشل
  },

  // ========== ⚙️ قسم الإعدادات الأساسية ==========
  options: {
    sound_enabled: true,           // تفعيل/تعطيل الأصوات
    check_dictionary_online: false, // التحقق من الكلمات أونلاين
    maxApplesPerColumn: 3,         // عدد التفاحات في كل عمود
    fallDurationMs: 700,           // زمن السقوط (مللي ثانية)
    bounceDurationMs: 420,         // زمن الارتداد (مللي ثانية)
    bounceTiltDeg: 28,             // زاوية الميل (درجات)
    appleSizeBasePx: 34,           // حجم التفاحة الأساسي - 🆕 مصغر للجوال
    slotFontSizePx: 26,            // حجم خط الشرطات - 🆕 مصغر للجوال
    slotUnderscoreSpacing: 10,     // تباعد الشرطات - 🆕 مصغر للجوال
    arabicWordsFile: "assets/words_ar.json" // ملف الكلمات العربية
  },

  // ========== 📱 قسم إعدادات الجوال ==========
  mobile: {
    enabled: true,                 // تفعيل تحسينات الجوال
    touchOptimized: true,          // تحسين اللمس
    responsiveBreakpoints: {       // نقاط التكسر للاستجابة
      small: 480,                  // هواتف صغيرة
      medium: 768,                 // هواتف كبيرة/أفقية
      large: 1024                  // أجهزة لوحية
    },
    touchTargetSize: 44,           // حجم الهدف لللمس (بكسل)
    longPressDelay: 500,           // تأخير الضغط الطويل (مللي ثانية)
    swipeEnabled: true             // تفعيل الإيماءات
  },

  // ========== 🎨 قسم الإعدادات المتقدمة ==========
  advanced: {
    
    // 🌳 إعدادات الشجرة
    tree: {
      setupPage: {
        width: "90%",           // عرض الشجرة في الصفحة الأولى
        maxWidth: "780px",      // أقصى عرض
        marginTop: "40px",      // إزاحة للأسفل
        mobile: {
          width: "95%",         // عرض على الجوال
          maxWidth: "none",     // لا حد أقصى على الجوال
          marginTop: "20px"     // إزاحة أقل على الجوال
        }
      },
      gamePage: {
        width: "95%",           // عرض الشجرة في اللعبة  
        maxWidth: "760px",      // أقصى عرض
        marginTop: "30px",      // إزاحة للأسفل
        mobile: {
          width: "98%",         // عرض على الجوال
          maxWidth: "none",     // لا حد أقصى على الجوال
          marginTop: "15px"     // إزاحة أقل على الجوال
        }
      }
    },

    // 🍎 إعدادات التفاحات المتقدمة
    apples: {
      heroApples: {
        size: 30,               // حجم تفاح الزينة - 🆕 مصغر للجوال
        fontSize: "14px",       // حجم الخط داخل التفاحة - 🆕 مصغر للجوال
        mobile: {
          size: 26,             // حجم أصغر على الجوال
          fontSize: "12px"      // خط أصغر على الجوال
        }
      },
      fallenSize: 38,           // حجم التفاح الساقط - 🆕 مصغر للجوال
      fallenLetterSize: 16,     // حجم خط التفاح الساقط - 🆕 مصغر للجوال
      mobile: {
        fallenSize: 32,         // حجم أصغر على الجوال
        fallenLetterSize: 14    // خط أصغر على الجوال
      }
    },

    // 🎮 إعدادات الواجهة
    ui: {
      slots: {
        revealedColor: "#0b8a3a", // لون الحرف المكشف
        revealedSizeIncrease: 6,  // زيادة حجم الحرف عند الكشف
        mobile: {
          revealedSizeIncrease: 4 // زيادة أقل على الجوال
        }
      },
      buttons: {
        minHeight: 44,           // ارتفاع أدنى للأزرار لللمس
        minWidth: 44,            // عرض أدنى للأزرار لللمس
        padding: "12px 16px",    // حشوة داخلية
        mobile: {
          minHeight: 40,         // ارتفاع أقل على الجوال
          minWidth: 40,          // عرض أقل على الجوال
          padding: "10px 14px"   // حشوة أقل على الجوال
        }
      }
    },

    // ⌨️ إعدادات لوحة المفاتيح
    keyboard: {
      letterButtons: {
        size: 44,               // حجم أزرار الحروف
        fontSize: "18px",       // حجم خط الحروف
        gap: "8px",             // المسافة بين الأزرار
        mobile: {
          size: 40,             // حجم أصغر على الجوال
          fontSize: "16px",     // خط أصغر على الجوال
          gap: "6px"            // مسافة أقل على الجوال
        }
      }
    }
  },

  // ========== 🔤 قسم اللغات والنصوص ==========
  languages: {
    // الحروف لكل لغة
    nl: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","È","Ë","Ö","Ü"],
    en: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ar: ["ا","أ","إ","آ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ؤ","ي","ئ","ى"],
    
    // النصوص حسب اللغة
    texts: {
      titles: {
        win: {
          nl: "Gefeliciteerd!",
          en: "Congratulations!",
          ar: "مبروك!"
        },
        lose: {
          nl: "Alle appels zijn gevallen",
          en: "Apples finished", 
          ar: "انتهت التفاحات"
        },
        wordNotFound: {
          nl: "Woord niet gevonden",
          en: "Word not found",
          ar: "الكلمة غير موجودة"
        }
      },
      messages: {
        enterWord: {
          nl: "Voer een woord in.",
          en: "Please enter a word.",
          ar: "الرجاء إدخال كلمة."
        },
        wordNotFound: {
          nl: "Woord niet gevonden in woordenboek. Controleer spelling.",
          en: "Word not found in dictionary. Check spelling.",
          ar: "الكلمة غير موجودة في القاموس. راجع التهجئة."
        },
        mobileTips: {
          nl: "Tip: Tik op de letters om te raden",
          en: "Tip: Tap on letters to guess",
          ar: "نصيحة: انقر على الحروف للتخمين"
        }
      }
    }
  },

  // ========== 🎯 قسم تحسينات الأداء ==========
  performance: {
    lazyLoadImages: true,        // تحميل الصور بكسلولة
    debounceResize: true,        // تقليل أحداث تغيير الحجم
    throttleAnimations: true,    // تخفيف الرسوم المتحركة
    mobile: {
      reduceAnimations: false,   // تقليل الرسوم على الجوال
      lowerImageQuality: false,  // خفض جودة الصور على الجوال
      optimizeTouchEvents: true  // تحسين أحداث اللمس
    }
  }

};

/*
 ========== 🎯 دليل التعديلات السريع للجوال ==========

 📱 لتحسين تجربة الجوال:
    mobile.enabled = true                    // تفعيل كل تحسينات الجوال
    mobile.touchTargetSize = 44              // حجم مناسب لللمس بالأصابع
    options.appleSizeBasePx = 34             // تفاحات أصغر تناسب الشاشات الصغيرة

 ⚡ لتحسين الأداء على الجوال:
    performance.mobile.reduceAnimations = true  // تقليل الرسوم لتحسين الأداء
    performance.mobile.optimizeTouchEvents = true // تحسين استجابة اللمس

 🎨 لتعديل الواجهة للجوال:
    advanced.ui.buttons.mobile.minHeight = 40    // أزرار أصغر للجوال
    advanced.keyboard.mobile.size = 40           // أزرار حروف أصغر

 🔧 لإعدادات متقدمة:
    - advanced.tree.mobile.width = "98%"         // شجرة تأخذ مساحة أكبر
    - advanced.apples.mobile.size = 26           // تفاحات زينة أصغر

 📝 ملاحظات هامة للجوال:
    1. حجم اللمس لا يقل عن 44px لسهولة الاستخدام
    2. الصور يجب أن تكون متجاوبة وتعمل مع الشاشات الصغيرة
    3. النصوص يجب أن تكون قابلة للقراءة على الشاشات الصغيرة
    4. الأزرار يجب أن تكون سهلة الضغط بالأصابع

 🚀 بعد التعديل، احفظ الملف ثم 새دء الصفحة على الجوال لرؤية التغييرات

*/
