import React, { useCallback, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackItem } from '../resources/interfaces/stackItem';
import { TabItem } from "../resources/interfaces/tabItem";
import { navigationRef } from '../navigation';
import { Platform, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from '../components/Icon';
import config from '../config';
import transitions from './transitions';
import Welcome from "../screens/Auth/Welcome";
import WelcomeWithEmail from "../screens/Auth/WelcomeWithEmail";
import SignUp from "../screens/Auth/SignUp";
import Location from "../screens/Auth/Location";
import SignInWithEmail from "../screens/Auth/SignInWithEmail";
import SignInWithPhone from "../screens/Auth/SignInWithPhone";
import PhoneVerification from "../screens/Auth/PhoneVerification";
import ForgetPassword from "../screens/Auth/ForgetPassword";
import ChangePassword from "../screens/Auth/ChangePassword";
import Home from "../screens/Content/Home";
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import { tr } from "../resources/translations";
import CustomDrawer from "./drawer";
import { DrawerItem } from "../resources/interfaces/drawerItem";
import { wdp } from "../utils/responsive";
import HomeFilter from '../screens/Content/HomeFilter';
import ProductDetails from "../screens/Content/ProductDetails";
import Cart from "../screens/Content/Cart";
import WishList from "../screens/Content/WishList";
import Profile from "../screens/Content/Profile";
import Notifications from "../screens/Content/Notifications";
import OrderHistory from "../screens/Content/Order/OrderHistory";
import Address from "../screens/Content/Checkout/Address";
import Delivery from "../screens/Content/Checkout/Delivery";
import Payment from "../screens/Content/Checkout/Payment";
import Checkout from "../screens/Content/Checkout";
import SuccessOrder from "../screens/Content/SuccessOrder";
import MyAddresses from "../screens/Content/Addresses/MyAddresses";
import DeliveryReview from "../screens/Content/DeliveryReview";
import FAQ from "../screens/Content/FAQ";
import PaymentHistory from "../screens/Content/PaymentHistory";
import EditAddress from "../screens/Content/Addresses/EditAddress";
import AddAddress from "../screens/Content/Addresses/AddAddress";
import Settings from "../screens/Content/Settings";
import ProfileDetails from "../screens/Content/Profile/ProfileDetails";
import MapSheet from "../screens/Content/MapSheet";
import SightPower from "../screens/Content/SightPower";
import TrackOrder from "../screens/Content/Order/TrackOrder";
import ChooseCountry from "../screens/Content/Addresses/ChooseCountry";
import OrderTrackMap from "../screens/Content/Order/OrderTrackMap";
import Loading from "../screens/Content/Loading";
import Languages from "../screens/Content/Settings/Languages";
import SplashChooseLanguage from "../screens/Auth/SplashChooseLanguage";
import { getLocalData } from "../utils/storage";
import { keys } from "../api/keys";


const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();
const Drawer = createDrawerNavigator();
const tabsScreens: TabItem[] = [{
    id: 0,
    name: 'home',
    component: Home,
    icon: (color, size) => <Icon type={"AntDesign"} name={"home"} color={color} size={size}/>
}, {
    id: 1,
    name: 'cart',
    component: Cart,
    icon: (color, size) => <Icon type={"SVG"} name={"addToCart"} color={color} size={size}/>,
}, {
    id: 2,
    name: 'wishlist',
    component: WishList,
    icon: (color, size) => <Icon type={"Feather"} name={"heart"} color={color} size={size}/>,
}, {
    id: 3,
    name: 'profile',
    component: Profile,
    icon: (color, size) => <Icon type={"SVG"} name={"addProfile"} color={color} size={size}/>,
},];
const Logout = () => <></>
const HomeTabs = () => {
    const theme = useTheme();
    return (<Tabs.Navigator
        tabBarOptions={{
            activeTintColor: theme.bottomTabs.label,
            whenActiveShow: "both",
            whenInactiveShow: "icon-only",
            dotSize: 'large',
            tabStyle: {borderRadius: 30, bottom: -10, paddingBottom: 5, paddingHorizontal: 15},
            labelStyle: {fontFamily: theme.fonts.bold, fontSize: theme.text.s8},
            keyboardHidesTabBar: true,
        }}
        appearance={{
            floating: true,
            tabBarBackground: theme.bottomTabs.barBackground,
            activeTabBackgrounds: theme.bottomTabs.activeTabBackground,
            topPadding: 5,
            dotCornerRadius: 17,
        }}
    >
        {tabsScreens.map((screen, idx) => (<Tabs.Screen
            key={`tabScreen${idx}`}
            name={tr('bottomTab.' + `${screen.name}`)}
            component={screen.component}
            options={{
                tabBarIcon: ({focused, color, size}) => (screen.icon(theme.bottomTabs.icon, theme.text.s5))
            }}
        />))}
    </Tabs.Navigator>);
};
const authScreens: StackItem[] = [{
    id: 0, name: 'welcome', component: Welcome
}, {
    id: 1, name: 'welcomeWithEmail', component: WelcomeWithEmail,
}, {
    id: 2, name: 'signUp', component: SignUp,
}, {
    id: 3, name: 'location', component: Location,
}, {
    id: 4, name: 'signInWithEmail', component: SignInWithEmail,
}, {
    id: 5, name: 'signInWithPhone', component: SignInWithPhone,
}, {
    id: 6, name: 'phoneVerification', component: PhoneVerification,
}, {
    id: 7, name: 'forgetPassword', component: ForgetPassword,
}, {
    id: 8, name: 'changePassword', component: ChangePassword,
}, {
    id: 9, name: 'chooseCountry', component: ChooseCountry
}, {
    id: 10, name: "splashChooseLanguage", component: SplashChooseLanguage
}];
const drawerScreens: DrawerItem[] = [{
    id: 0,
    name: 'homeTab',
    icon: (color, size) => <Icon type={"AntDesign"} name={"home"} color={color} size={size}/>,
    component: HomeTabs
}, {
    id: 1,
    name: 'logout',
    icon: (color, size) => <Icon type={"AntDesign"} name={"logout"} color={color} size={size}/>,
    component: Logout
},];

const DrawerNavigator = () => {
    const theme = useTheme();
    return (<Drawer.Navigator initialRouteName="Home"
                              screenOptions={{
                                  drawerStyle: {
                                      width: wdp(57)
                                  }
                              }}
                              drawerContent={props => <CustomDrawer {...props}/>}
    >
        <Drawer.Group>
            {drawerScreens.map((screen, idx) => (<Drawer.Screen
                key={`screen${idx}`}
                options={{
                    headerShown: false, ...transitions.RightToLeft,
                    drawerIcon: screen.icon,
                    drawerActiveTintColor: theme.drawer.item,
                    drawerInactiveTintColor: theme.drawer.item,
                    drawerLabelStyle: {fontSize: theme.text.s8, fontFamily: theme.fonts.semi_bold},
                    drawerItemStyle: {flex: 1},
                    drawerActiveBackgroundColor: "transparent",
                    pressColor: theme.drawer.pressItem,
                    title: tr('drawer.' + `${screen.name}`)
                }}
                name={screen.name}
                component={screen.component}
            />))}
        </Drawer.Group>
    </Drawer.Navigator>);
};

const screens: StackItem[] = [{
    id: 0, name: 'drawer', component: DrawerNavigator
}, {
    id: 1, name: 'homeFilter', component: HomeFilter
}, {
    id: 2, name: 'productDetails', component: ProductDetails
}, {
    id: 3, name: 'notifications', component: Notifications
}, {
    id: 4, name: 'orderHistory', component: OrderHistory
}, {
    id: 5, name: 'checkout', component: Checkout
}, {
    id: 6, name: 'address', component: Address
}, {
    id: 7, name: 'delivery', component: Delivery
}, {
    id: 8, name: 'payment', component: Payment
}, {
    id: 9, name: 'myAddresses', component: MyAddresses
}, {
    id: 10, name: 'deliveryReview', component: DeliveryReview
}, {
    id: 11, name: 'faq', component: FAQ
}, {
    id: 12, name: 'paymentHistory', component: PaymentHistory
}, {
    id: 13, name: 'editAddress', component: EditAddress
}, {
    id: 14, name: 'addAddress', component: AddAddress
}, {
    id: 15, name: 'settings', component: Settings
}, {
    id: 16, name: 'profileDetails', component: ProfileDetails
}, {
    id: 17, name: 'changePassword', component: ChangePassword
}, {
    id: 18, name: 'trackOrder', component: TrackOrder
}, {
    id: 19, name: 'orderTrackMap', component: OrderTrackMap
}, {
    id: 20, name: 'languages', component: Languages
}, {
    id: 21, name: 'loading', component: Loading
}];
const modalScreens: StackItem[] = [{
    id: 0, name: 'successOrder', component: SuccessOrder
}, {
    id: 1, name: 'mapSheet', component: MapSheet
}, {
    id: 2, name: 'sightPower', component: SightPower
}];

const AppNavigator = () => {
    const theme = useTheme();
    const userStatus = useSelector(state => state.auth);
    const {appLanguage} = useSelector(state => state.lang);
    const [router, setRouter] = useState<string>('');
    const [routeName, setRouteName] = useState('splashChooseLanguage');
    const checkSelectAppLanguage = async () => {
        const lang = await getLocalData(keys.LANG);
        if (!!!lang) {
            setRouteName('splashChooseLanguage');
        } else {
            setRouteName('welcome');
        }
    }
    const checkUser = async () => {
        const user = await getLocalData(keys.AUTH);
        if (user && user.logged) {
            setRouter('drawer');
        } else setRouter('auth');
    }
    useEffect(() => {
        if (config.debug) {
            console.log('userStatus =>', userStatus);
            console.log('appLanguage =>', appLanguage);
        }
        checkUser().then();
        checkSelectAppLanguage().then();
    }, [userStatus, appLanguage]);

    const selectRouter = useCallback(() => {
        if (router === 'drawer') {
            return (<Stack.Navigator screenOptions={{gestureEnabled: Platform.OS === 'ios'}}>
                <Stack.Group>
                    {screens.map((screen, idx) => (<Stack.Screen
                        key={idx}
                        options={{
                            headerShown: false, ...transitions.RightToLeft,
                        }}
                        name={screen.name}
                        component={screen.component}
                    />))}
                </Stack.Group>
                <Stack.Group screenOptions={{
                    presentation: 'modal'
                }}>
                    {modalScreens.map((screen, idx) => (<Stack.Screen
                        key={`screen${idx}`}
                        options={{
                            headerShown: false,
                        }}
                        name={screen.name}
                        component={screen.component}
                    />))}
                </Stack.Group>
            </Stack.Navigator>)
        } else if (router === 'auth') {
            return (<Stack.Navigator initialRouteName={routeName} screenOptions={{gestureEnabled: true}}>
                <Stack.Group>
                    {authScreens.map((screen, idx) => (<Stack.Screen
                        key={idx}
                        options={{
                            headerShown: false, ...transitions.RightToLeft
                        }}
                        name={screen.name}
                        component={screen.component}
                    />))}
                </Stack.Group>
            </Stack.Navigator>);
        }
        return (<Container>
            <Icon
                style={{
                    color: theme.primary, fontSize: 60,
                }}
                name="loader"
                type="Feather"
            />
            <Text>Loading...</Text>
        </Container>);
    }, [router]);

    return (<NavigationContainer ref={navigationRef}>
        {selectRouter()}
    </NavigationContainer>);
};

export default AppNavigator;
