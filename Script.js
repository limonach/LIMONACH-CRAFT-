// النصوص بكل اللغات
const translations = {
  ar: {
    title: "مرحباً بكم في مشروعي",
    aboutTitle: "حول المشروع",
    aboutText: "هذا مشروع تجريبي حيث يمكن للمستخدمين دعم الفكرة من خلال مشاهدة الإعلانات.",
    adTitle: "إعلان",
    adText: "هنا سيظهر إعلانك.",
    adButton: "إضغط هنا لمشاهدة الإعلان"
  },
  en: {
    title: "Welcome to My Project",
    aboutTitle: "About the Project",
    aboutText: "This is a demo project where users can support an idea by interacting with ads.",
    adTitle: "Advertisement",
    adText: "This is where your advertisement will appear.",
    adButton: "Click here to view Ad"
  },
  es: {
    title: "Bienvenido a Mi Proyecto",
    aboutTitle: "Sobre el Proyecto",
    aboutText: "Este es un proyecto de demostración donde los usuarios pueden apoyar una idea viendo anuncios.",
    adTitle: "Anuncio",
    adText: "Aquí aparecerá tu anuncio.",
    adButton: "Haz clic aquí para ver el anuncio"
  },
  fr: {
    title: "Bienvenue dans Mon Projet",
    aboutTitle: "À propos du projet",
    aboutText: "Ceci est un projet de démonstration où les utilisateurs peuvent soutenir une idée en regardant des publicités.",
    adTitle: "Publicité",
    adText: "C'est ici que votre annonce apparaîtra.",
    adButton: "Cliquez ici pour voir l'annonce"
  },
  hi: {
    title: "मेरे प्रोजेक्ट में आपका स्वागत है",
    aboutTitle: "परियोजना के बारे में",
    aboutText: "यह एक डेमो प्रोजेक्ट है जहाँ उपयोगकर्ता विज्ञापनों को देखकर एक विचार का समर्थन कर सकते हैं।",
    adTitle: "विज्ञापन",
    adText: "यहाँ आपका विज्ञापन दिखाई देगा।",
    adButton: "विज्ञापन देखने के लिए यहां क्लिक करें"
  },
  ru: {
    title: "Добро пожаловать в мой проект",
    aboutTitle: "О проекте",
    aboutText: "Это демонстрационный проект, где пользователи могут поддержать идею, просматривая рекламу.",
    adTitle: "Реклама",
    adText: "Здесь появится ваша реклама.",
    adButton: "Нажмите здесь, чтобы посмотреть рекламу"
  },
  zh: {
    title: "欢迎来到我的项目",
    aboutTitle: "关于项目",
    aboutText: "这是一个演示项目，用户可以通过观看广告来支持一个想法。",
    adTitle: "广告",
    adText: "您的广告将出现在这里。",
    adButton: "点击这里查看广告"
  }
};

// تبديل اللغة
const langSelect = document.getElementById("languageSelect");
const elements = {
  title: document.getElementById("title"),
  aboutTitle: document.getElementById("aboutTitle"),
  aboutText: document.getElementById("aboutText"),
  adTitle: document.getElementById("adTitle"),
  adText: document.getElementById("adText"),
  adButton: document.getElementById("adButton")
};

langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  const t = translations[lang];
  for (let key in elements) {
    elements[key].textContent = t[key];
  }
});

// إعلان (Modal)
const modal = document.getElementById("adModal");
const adButton = document.getElementById("adButton");
const closeAd = document.getElementById("closeAd");

adButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeAd.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
