import { setLocalData } from "./storage";
import { keys } from "../api/keys";
import { LanguageItemProps } from "../resources/interfaces/items/languageItem";
import { saveLanguage } from "../screens/Content/Settings/Languages/action";
import { store } from "../redux/store";

export const ToggleLanguage = async (lang: LanguageItemProps) => {
    if (lang) {
        saveLanguage(lang);
        await setLocalData(keys.LANG, lang)
    }
}
export const getByLanguage1 = (item, keyName) => {
    const {language} = store.getState().lang;
    return item[`${keyName}_${language}`]
}

export const getByLanguage = (keyName) => {
    const {language} = store.getState().lang;
    return `${keyName}_${language?.languageCode}`
}
