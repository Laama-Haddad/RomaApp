import { NavigationProp } from "@react-navigation/native";
import { LangState } from "./Settings/languages";

export interface SplashChooseLanguageProps {
    lang: LangState;
    navigation?: NavigationProp<any>;
}
