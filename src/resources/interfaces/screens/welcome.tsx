import { NavigationProp } from "@react-navigation/native";
import { LangState } from "./Settings/languages";

export interface WelcomeProps {
    lang: LangState;
    navigation?: NavigationProp<any>;
}
