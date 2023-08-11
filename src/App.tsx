import React, { useEffect } from 'react';
import { I18nManager, Platform, StatusBar, StatusBarStyle, UIManager } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import lightTheme from './resources/theme/lightTheme';
import GlobalAlert from './connected-components/Alert';
import GlobalModal from "./connected-components/Modal";
import AppNavigator from './router';
import { NativeBaseProvider } from 'native-base';
import { saveCartList } from "./screens/Content/Cart/action";
import { getLocalData } from "./utils/storage";
import { keys } from "./api/keys";
import { saveWishList } from "./screens/Content/WishList/action";
import { saveLanguage } from "./screens/Content/Settings/Languages/action";
import translations from "./resources/translations";
import { setAuthStatus } from "./screens/Auth/SignInWithEmail/action";

const STYLES: StatusBarStyle[] = ['default', 'dark-content', 'light-content'];
const TRANSITIONS: any = ['fade', 'slide', 'none'];


const App = () => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, [])
    const copyDataFromLocalToReducer = async () => {
        let cartList = await getLocalData(keys.CART);
        saveCartList(!cartList ? [] : cartList);
        let wishList = await getLocalData(keys.FAVORITE);
        saveWishList(!wishList ? [] : wishList);
        let appLanguage = await getLocalData(keys.LANG);
        !!appLanguage && saveLanguage(appLanguage)
        !!appLanguage && translations(appLanguage.languageCode)
        let logged = await getLocalData(keys.AUTH);
        setAuthStatus(logged ? logged : {logged: false});
    };
    useEffect(() => {
        copyDataFromLocalToReducer().then();
    }, []);
    return (<Provider store={store}>
        <ThemeProvider theme={{
            ...lightTheme, fonts: Platform.OS === 'android' ? {
                regular: I18nManager.isRTL ? 'DIN Next LT W23 Regular' : 'Myriad Pro Regular',
                semi_bold: I18nManager.isRTL ? 'DIN Next LT W23 Medium' : 'Myriad Pro SemiBold',
                bold: I18nManager.isRTL ? 'DIN Next LT W23 Bold' : 'Myriad Pro Bold'
            } : {
                regular: I18nManager.isRTL ? 'DINNextLTW23-Regular' : 'MyriadPro-Regular',
                semi_bold: I18nManager.isRTL ? 'DINNextLTW23-Medium' : 'MyriadPro-SemiBold',
                bold: I18nManager.isRTL ? 'DINNextLTW23-Bold' : 'MyriadPro-Bold'
            }
        }}>
            <NativeBaseProvider>
                <StatusBar
                    animated
                    translucent
                    backgroundColor={'transparent'}
                    barStyle={STYLES[1]}
                    showHideTransition={TRANSITIONS[0]}
                />
                <AppNavigator/>
                <GlobalAlert/>
                <GlobalModal/>
            </NativeBaseProvider>
        </ThemeProvider>
    </Provider>)
}

export default App;



