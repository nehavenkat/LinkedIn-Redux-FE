import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//resources
const resources = {
  en: {
    translation: {
      welcome1: "Welcome to the LinkedIn Page",
      welcome2: "Here you can Post, find experiences and List of Profiles too"
    }
  },
  te: {
    translation: {
      welcome1: "లింక్డ్ఇన్ పేజీకి స్వాగతం",
      welcome2:
        "ఇక్కడ మీరు మీ ఆలోచనలను పోస్ట్ చేయవచ్చు, కనుగొనవచ్చు ప్రొఫైల్స్ మరియు వాటి అనుభవాల జాబితా.."
    }
  }
};

//configuration
i18n.use(initReactI18next).init({
  resources,
  lng: "en"
});

export default i18n;
