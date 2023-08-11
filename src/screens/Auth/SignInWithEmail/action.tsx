import { store } from '../../../redux/store'
import { setAuth } from './reducer';
import { AuthState } from "../../../resources/interfaces/screens/signInWithEmail";

export const setAuthStatus = ({logged}: AuthState) => {
    store.dispatch(
        setAuth({
            logged
        }),
    );
};

