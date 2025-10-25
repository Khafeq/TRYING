/* config.js -- Appelboom v7 Settings - الإصدار الشامل النهائي */
const settings = {
  
  // ========== 🖼️ قسم الصور ==========
  images: {
    background: "assets/images/background.jpg",
    tree: "assets/images/tree.png",
    apple: "assets/images/apple.png",
    appleTransparent: "assets/images/apple_transparent.png",
    crowdFail: "assets/images/crowd_fail.jpg",
    crowdWin: "assets/images/crowd_win.jpg",
    winImage: "assets/images/win.jpg"
  },

  // ========== 🔊 قسم الأصوات ==========
  sounds: {
    birds: "assets/sounds/birds.mp3",
    click: "assets/sounds/click1.mp3",
    fallWhistle: "assets/sounds/fall_whistle.mp3",
    impact: "assets/sounds/impact.mp3",
    slide: "assets/sounds/slide.mp3",
    successList: [
      "assets/sounds/success1.mp3",
      "assets/sounds/success2.mp3"
    ],
    failList: [
      "assets/sounds/fail1.mp3",
      "assets/sounds/fail2.mp3"
    ],
    successMessage: "assets/sounds/success_message.mp3",
    failMessage: "assets/sounds/fail_message.mp3"
  },

  // ========== ⚙️ قسم الإعدادات الأساسية ==========
  options: {
    sound_enabled: true,
    check_dictionary_online: false,
    maxApplesPerColumn: 3,
    fallDurationMs: 700,
    bounceDurationMs: 420,
    bounceTiltDeg: 28,
    appleSizeBasePx: 38,
    slotFontSizePx: 30,
    slotUnderscoreSpacing: 12,
    arabicWordsFile: "assets/words_ar.json"
  },

  // ========== 🎨 قسم الإعدادات المتقدمة ==========
  advanced: {
    tree: {
      setupPage: {
        width: "86%",
        maxWidth: "760px",
        marginTop: "0px"
      },
      gamePage: {
        width: "92%", 
        maxWidth: "740px",
        marginTop: "0px"
      }
    },
    apples: {
      heroApples: {
        size: 38,
        fontSize: "18px"
      },
      fallenSize: 44,
      fallenLetterSize: 18
    },
    ui: {
      slots: {
        revealedColor: "#0b8a3a",
        revealedSizeIncrease: 6
      }
    }
  },

  // ========== 🔤 قسم اللغات والنصوص ==========
  languages: {
    nl: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","È","Ë","Ö","Ü"],
    en: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    ar: ["ا","أ","إ","آ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ؤ","ي","ئ","ى"]
  }
};