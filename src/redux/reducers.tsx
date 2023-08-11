import alertReducer from '../connected-components/Alert/reducer';
import modalReducer from '../connected-components/Modal/reducer';
import authReducer from '../screens/Auth/SignInWithEmail/reducer';
import cartReducer from '../screens/Content/Cart/reducer';
import wishReducer from '../screens/Content/WishList/reducer';
import langReducer from '../screens/Content/Settings/Languages/reducer';

export default {
    alert: alertReducer, modal: modalReducer, auth: authReducer, cart: cartReducer, wish: wishReducer, lang: langReducer
};
