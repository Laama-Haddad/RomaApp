import { store } from '../../../../redux/store'
import { setLanguage } from './reducer';
import { LanguageItemProps } from "../../../../resources/interfaces/items/languageItem";

export const saveLanguage = (language: LanguageItemProps) => {
    store.dispatch(setLanguage({
        language
    }));
};


