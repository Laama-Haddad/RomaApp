import { setLocalData } from "./storage";
import { keys } from "../api/keys";
import { setAuthStatus } from "../screens/Auth/SignInWithEmail/action";
import { AuthState } from "../resources/interfaces/screens/signInWithEmail";

export const ToggleAuth = async (auth: AuthState) => {
    if (auth) {
        setAuthStatus(auth);
        await setLocalData(keys.AUTH, auth)
    }
}
