import { NavigationProp } from "@react-navigation/native";
import { LanguageItemProps } from "../../items/languageItem";

export interface LangState {
    language: LanguageItemProps | null;
}

export interface LanguageProps {
    navigation?: NavigationProp<any>;
    lang: LangState
}
