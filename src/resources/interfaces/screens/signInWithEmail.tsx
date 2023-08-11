import { NavigationProp } from "@react-navigation/native";

export interface AuthState {
    logged: boolean;
}

export interface SignInWithEmailProps {
    navigation?: NavigationProp<any>;
    auth: AuthState;
}
