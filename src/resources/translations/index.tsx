import i18n from 'react-native-i18n';
import memoize from 'lodash.memoize';
import languages from './loaders';
import { I18nManager } from "react-native";


export const tr = memoize((key, config) => i18n.t(key, config), (key, config) => (config ? key + JSON.stringify(config) : key));

export default (language: string) => {

    const fallback = 'en';
    if (!language) {
        tr.cache.clear();

        i18n.translations = {[fallback]: languages[fallback].loader()};
        i18n.locale = fallback;
    } else {
        tr.cache.clear();
        if (language !== 'en') {
            i18n.translations = {en: languages.en.loader()};
        }
        I18nManager.forceRTL(languages[language].isRTL);
        i18n.translations[language] = languages[language].loader();
        i18n.locale = language;
    }
};

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
i18n.translations = {en: languages.en.loader(), ar: languages.ar.loader()};
i18n.locale = 'en';
