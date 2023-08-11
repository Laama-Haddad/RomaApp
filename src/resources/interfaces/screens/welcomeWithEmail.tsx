import { NavigationProp } from "@react-navigation/native";
import { LangState } from "./Settings/languages";

export interface WelcomeWithEmailProps {
    navigation?: NavigationProp<any>;
    lang: LangState;
}
