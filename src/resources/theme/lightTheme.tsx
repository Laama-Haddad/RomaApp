import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from './colors';
import { Theme } from '../interfaces/colors';
import { I18nManager, Platform } from "react-native";

const SCREEN_HEIGHT_REFERENCE = 742;

/**
 * This can be used to create different themes
 * like dark and light. It can be then connected to
 * React context and controlled via a setting flag.
 */

const lightTheme: Theme = {
    primary: colors.primary,
    secondary: colors.secondary,
    info: colors.info,
    homeBackground: '#FFFFFF',
    homeBackground1: '#F9F9FF',
    loading: {
        background: '#FFFFFF', label: '#1C2340', indicator: '#1C2340'
    },
    languages: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        contentBackground: '#FFFFFF',
        checkIcon: '#36B789',
        separator: '#dedede',
        language: '#1C2340',
    },
    profileDetails: {
        headerBackground: colors.secondary,
        headerTitle: '#FFFFFF',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        contentBackground: '#FFFFFF',
        label: '#1C2340',
        creditAmount: colors.secondary,
        inputPlaceHolder: '#8A8D9F',
        editIcon: '#B4C2CD',
        activeEditIcon: colors.secondary,
        submitBackground: colors.secondary,
        submitTitle: '#FFFFFF'
    },
    settings: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        contentBackground: '#FFFFFF',
        label: '#1C2340',
        lightLabel: '#8A8A8F',
        arrowIcon: '#1C2340',
        accountsBackground: colors.secondary,
        accounts: '#FFFFFF',
        options: colors.secondary,
        itemLeftIcon: '#1C2340'
    },
    faq: {
        headerBackground: '#FFFFFF', headerTitle: '#1C2340', headerIcon: '#1C2340', background: '#F9F9FF',
    },
    deliveryReview: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        reviewBackground: '#FFFFFF',
        title: '#1C2340',
        info: '#8A8D9F',
        emptyStar: '#C8C8D3',
        fullStar: colors.primary,
        inputText: '#1C2340',
        inputPlaceHolder: '#8A8D9F',
        inputBackground: '#F0F1F5',
        submitBackground: colors.secondary,
        submitTitle: '#FFFFFF'
    },
    myAddresses: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        addressBackground: '#FFFFFF',
        addressTitle: '#1C2340',
        addressDetails: '#637381'
    },
    checkout: {
        headerBackground: '#FFFFFF', headerTitle: '#1C2340', headerIcon: '#1C2340', background: '#F9F9FF',
    },
    confirmOrder: {
        background: '#FFFFFF',
        label: '#1C2340',
        number: '#7530FF',
        cartItemBackground: '#F9F9FF',
        deliveryIcon: '#FFFFFF',
        deliveryIconBackground: colors.secondary,
        deliveryPrice: '#FE2121',
        lightLabel: '#637381',
        deliveryBackground: '#F9FAFB',
        paymentIcon: '#FFFFFF',
        paymentIconBackground: '#7530FF',
        optionsIcon: '#7530FF',
        creditBackground: '#F9FAFB',
        totalAmountBackground: "#F9F9FF"
    },
    payment: {
        background: '#F9F9FF',
        inputBackground: '#FFFFFF',
        buttonRightText: '#EF5A5B',
        buttonLeftIcon: colors.secondary,
        buttonRightIcon: '#4A4A4A',
        buttonBackground: '#FFFFFF',
        buttonTitle: '#1C2340',
    },
    delivery: {
        background: '#F9F9FF',
        deliveryWayBackground: '#FFFFFF',
        way: '#1C2340',
        selectedWay: colors.secondary,
        period: '#8A8D9F',
        selectedIcon: '#1DBF73',
        unSelectedIconBorder: '#F1F1F1',
        info: '#919EAB'
    },
    address: {
        background: '#F9F9FF',
        addressBackground: '#FFFFFF',
        addressTitle: '#1C2340',
        addressDetails: '#637381',
        inputIcon: colors.secondary,
        buttonBackground: colors.secondary,
        buttonTitle: '#FFFFFF',
        inputPlaceHolder: '#8A8D9F',
        check: '#1DBF73'
    },
    profile: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        topBackground: '#FFFFFF',
        bottomBackground: '#FFFFFF',
        editIcon: '#FFFFFF',
        editIconBackground: '#01C1E5',
        label: '#1C2340',
        balance: '#8A8D9F',
        itemIcon: colors.secondary,
        itemIconBackground: colors.secondary
    },
    wishList: {
        headerBackground: colors.secondary,
        headerIcon: '#1C2340',
        headerTitle: '#FFFFFF',
        background: '#F9F9FF',
        label: '#1C2340',
        emptyWishListContainerBackground: '#FFFFFF',
        buttonBackground: colors.secondary
    },
    cart: {
        headerBackground: colors.secondary,
        headerIcon: '#1C2340',
        headerTitle: '#FFFFFF',
        background: '#F9F9FF',
        topBackground: '#FFFFFF',
        cartIcon: '#FFFFFF',
        cartBackground: colors.secondary,
        number: '#FE2121',
        label: '#1C2340',
        buttonTitle: '#FFFFFF',
        buttonBackground: colors.secondary,
        emptyCartListContainerBackground: '#FFFFFF',
        checkoutContainerBackground: '#FFFFFF'
    },
    sightPower: {
        headerBackground: colors.secondary,
        headerIcon: '#000000',
        headerTitle: '#000000',
        background: '#FFFFFF',
        title: '#000000',
        titleBackground: colors.secondary,
        value: '#000000',
        checkIcon: colors.secondary,
        separator: '#707070',
        submitTitle: '#000000',
        submitBackground: colors.secondary
    },
    productDetails: {
        background: '#FFFFFF',
        headerIcon: '#FFFFFF',
        headerTitle: '#FFFFFF',
        label: '#1C2340',
        stars: '#FF914D',
        backgroundButton: colors.primary,
        quantity: colors.primary,
        minus: '#B78624',
        plus: '#FFFFFF',
        submitTitle: '#FFFFFF',
        price: '#FF5757',
        backgroundColorsContainer: '#FFFFFF',
        titleColorsContainer: '#FFFFFF'
    },
    homeFilter: {
        background: '#FFFFFF',
        headerIcon: colors.secondary,
        headerTitle: colors.secondary,
        contentBackground: '#F9F9FF',
        activeTypeTitle: '#FFFFFF',
        inActiveTypeTitle: '#000000',
        typeBackground: colors.secondary,
        noResult: '#bcbcbc'
    },
    home: {
        background: '#FFFFFF',
        headerIcon: colors.secondary,
        filterIcon: colors.secondary,
        typeBackground: colors.secondary,
        activeTypeTitle: '#FFFFFF',
        inActiveTypeTitle: '#000000',
        noResult: '#bcbcbc'
    },
    changePassword: {
        contentBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        headerBackIcon: '#1C2340',
        headerTitle: '#1C2340',
        inputBackground: '#F4F5F7',
        inputPlaceHolder: '#8A8D9F',
        inputText: "#1C2340",
        errorText: "#FF0000",
        submitBackground: colors.primary,
        submitTitle: '#FFFFFF'
    },
    forgetPassword: {
        contentBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        headerBackIcon: '#1C2340',
        headerTitle: '#1C2340',
        info: '#1C2340',
        emailSent: '#1C2340',
        noCode: '#1C2340',
        resend: colors.primary,
        inputBackground: '#F4F5F7',
        inputPlaceHolder: '#8A8D9F',
        inputText: "#1C2340",
        submitBackground: colors.primary,
        submitTitle: '#FFFFFF',
    },
    phoneVerification: {
        contentBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        headerBackIcon: '#1C2340',
        headerTitle: '#1C2340',
        title: '#1C2340',
        subTitle: '#8A8D9F',
        info: '#1C2340',
        resendCode: '#CB8D13',
        time: '#1C2340',
        submitTitle: '#FFFFFF',
        submitBackground: colors.primary
    },
    signInWithPhone: {
        contentBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        headerBackIcon: '#1C2340',
        headerTitle: '#1C2340',
        title: '#1C2340',
        subTitle: '#1C2340',
        inputBackground: '#F4F5F7',
        checkIcon: '#FFFFFF',
        checkIconBackground: '#45BD84',
        inputPlaceHolder: '#8A8D9F',
        inputText: "#1C2340",
        submitBackground: colors.primary,
        submitTitle: '#FFFFFF',
        notAlready: '#1C2340',
        signUp: colors.primary,
        globeIcon: '#1C2340',
    },
    signInWithEmail: {
        contentBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        headerBackIcon: '#1C2340',
        headerTitle: '#1C2340',
        title: colors.primary,
        subTitle: '#1C2340',
        inputBackground: '#F4F5F7',
        inputIcon: colors.primary,
        inputPlaceHolder: '#8A8D9F',
        inputText: "#1C2340",
        checkIcon: '#FFFFFF',
        checkIconBackground: colors.primary,
        remember: '#1C2340',
        forget: colors.primary,
        submitBackground: colors.primary,
        submitTitle: '#FFFFFF',
        notAlready: '#1C2340',
        signUp: colors.primary
    },
    location: {
        contentBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        headerBackIcon: '#1C2340',
        headerTitle: '#1C2340',
        submitBackground: colors.primary,
        submitTitle: '#FFFFFF'
    },
    signUp: {
        contentBackground: '#FFFFFF',
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerBackIcon: '#1C2340',
        title: '#1C2340',
        subTitle: '#8A8D9F',
        inputBackground: '#F4F5F7',
        inputText: '#1C2340',
        inputPlaceHolder: '#8A8D9F',
        or: '#1C2340',
        line: '#F4F5F7',
        buttonBackground: colors.primary,
        buttonTitle: '#FFFFFF',
        alreadyAccount: '#1C2340',
        signIn: colors.primary,
        emailIcon: '#1C2340',
        checkIcon: '#FFFFFF',
        checkIconBackground: colors.primary,
        globeIcon: '#1C2340',
    },
    welcomeWithEmail: {
        bottomBackground: '#FFFFFF',
        title: '#000000',
        description: '#8A8D9F',
        buttonRegisterText: colors.primary,
        buttonRegisterBackground: colors.primary,
        buttonLoginText: '#FFFFFF',
        buttonLoginBackground: colors.primary,
        backIcon: '#000000'
    },
    welcome: {
        bottomBackground: colors.primary,
        text: '#FFFFFF',
        buttonText: '#CC8903',
        buttonBackground: '#FFFFFF',
        triangle: '#FFFFFF'
    },
    splashChooseLanguage: {
        background: colors.primary,
        logoBackground: '#FFFFFF',
        languagesBackground: '#FFFFFF',
        language: "#1C2340",
        checkIcon: '#36B789',
        submitBackground: '#FFFFFF',
        submitTitle: colors.secondary
    },
    bottomTabs: {
        barBackground: '#000000', activeTabBackground: colors.secondary, label: '#FFFFFF', icon: '#FFFFFF'
    },
    drawer: {
        background: "#F9F9FF",
        profileImageBackground: "#ffffff",
        profileName: "#1C2340",
        itemsBackground: '#F9F9FF',
        item: "#888888",
        activeItem: colors.secondary,
        pressItem: "#FFBC0010",
    },
    modal: {
        containerBackground: "#1C2340ab",
        titleBackground: colors.primary,
        title: '#FFFFFF',
        messageBackground: '#FFFFFF',
        message: '#1C2340',
        okTitle: '#FFFFFF',
        okBackground: colors.primary,
        borderColor: '#E4E4F1'
    },
    homeTabButton: {
        tabBackground: colors.secondary, activeTabTitle: '#FFFFFF', inActiveTabTitle: '#000000'
    },
    stepsProgressBar: {
        color: colors.secondary, checkIcon: '#FFFFFF', label: '#1C2340', description: '#8A8D9F'
    },
    notificationItemList: {
        background: '#FFFFFF',
        title: '#242A37',
        description: '#242A37',
        icon: '#FFFFFF',
        cancelledIconBackground: '#FE2121',
        acceptedIconBackground: '#01C1E5',
        paymentIconBackground: colors.secondary,
        promotionIconBackground: '#1DBF73'
    },
    circleColor: {
        border: "#707070", selectedBorder: "#FFFFFF"
    },
    button: {
        icon: colors.primary,
    },
    accordionItem: {
        background: '#FFFFFF',
        title: '#222B45',
        content: '#222545',
        border: '#dddddd',
        icon: '#FFFFFF',
        iconBackground: colors.secondary
    },
    bubbleMessage: {
        sentBackground: colors.secondary,
        receivedBackground: '#FFFFFF',
        sentText: '#FFFFFF',
        receivedText: '#1C2340',
        time: '#8A959E'
    },
    cartItem: {
        background: '#FFFFFF',
        title: '#1C2340',
        price: '#FE2121',
        description: '#1C2340',
        starsCount: '#8A8D9F',
        minusIcon: '#FE2121',
        plusIcon: colors.secondary,
        quantity: '#000000'
    },
    reviewItem: {
        ownerName: '#2D2E49', date: '#ABABB7', comment: '#8A8D9F', border: '#707070',
    },
    stars: {
        icon: colors.secondary, text: '#8A8D9F'
    },
    offerVerticalCard: {
        background: '#FFFFFF',
        iconBackground: colors.secondary,
        icon: '#FFFFFF',
        finalPrice: '#FE2121',
        price: '#000000',
        offerValue: '#FFFFFF',
        offerBackground: colors.secondary,
        productName: '#000000',
        startShadow: '#dddddd',
        finalShadow: '#fefefe'
    },
    heart: {
        outlineFavorite: '#FFFFFF', outlineUnFavorite: '#8A8D9F', background: '#FE2121', solid: '#FFFFFF'
    },
    wishListItem: {
        background: '#FFFFFF',
        title: '#1C2340',
        price: '#FE2121',
        starsCount: '#8A8D9F',
        cartIconBackground: colors.secondary,
        cartIcon: '#FFFFFF',
        minusIcon: '#FE2121',
        plusIcon: colors.secondary,
        quantity: '#1C2340'
    },
    timer: {
        time: '#000000', hoursBackground: colors.secondary, minutesBackground: '#E8E8E8', secondsBackground: '#E8E8E8'
    },
    dropDownList: {
        background: '#F4F5F7', text: 'gray', icon: 'gray'
    },
    offerHorizontalCard: {
        text: '#FFFFFF', line: '#AA7A5E'
    },
    paymentItem: {
        background: '#FFFFFF',
        id: '#8A8D9F',
        title: '#1C2340',
        price: '#FE2121',
        failed: colors.secondary,
        successfully: '#1DBF73',
        cancel: '#FF3737'
    },
    rangeSlider: {
        rail: '#dddddd', selectedRail: '#01C1E5', lowThumb: '#01C1E5', highThumb: '#01C1E5', label: '#1C2340'
    },
    progressStepper: {
        circleBackground: colors.secondary,
        circleBorder: colors.secondary,
        connector: colors.secondary,
        label: '#1C2340',
        activeLabel: colors.secondary,
        icon: '#FFFFFF',
        nextButtonBackground: colors.secondary,
        nextButtonTitle: '#FFFFFF'
    },
    searchBar: {
        largeSearchBarBackground: colors.primary,
        smallSearchBarBackground: colors.primary,
        largeSearchBarIcon: '#FFFFFF',
        smallSearchBarIcon: colors.primary,
        largeSearchBarPlaceholder: '#FFFFFF',
        smallSearchBarPlaceholder: '#c6c6c6',
        inputText: '#000000'
    },
    shippingItemCard: {
        background: '#FFFFFF',
        shippingNumberText: '#212B36',
        date: '#637381',
        itemsCount: '#637381',
        icon: '#FFFFFF',
        shipped: '#01C1E5',
        delivered: '#1DBF73',
        cancel: '#FE2121',
    },
    smallOfferCard: {
        background: '#FFFFFF',
        offerBackground: '#FF0000',
        saleBackground: colors.secondary,
        value: '#FFFFFF',
        title: '#1C2340'
    },
    textInput: {
        required: '#FF0000',
        cursorColor: colors.primary,
        icon: colors.primary,
        eyeIcon: '#aaaaaa',
        background: '#F4F5F7',
        inputText: '#000000'
    },
    switch: {
        switchOff: '#B4C2CD', switchOn: colors.secondary,
    },
    verificationCode: {
        background: '#F4F5F7', number: '#242A37', line: '#242A37'
    },
    alert: {
        backgroundPrimary: '#A1A1A1', textPrimary: '#FFFFFF',
    },
    fonts: Platform.OS === 'android' ? {
        regular: I18nManager.isRTL ? 'DIN Next LT W23 Regular' : 'Myriad Pro Regular',
        semi_bold: I18nManager.isRTL ? 'DIN Next LT W23 Medium' : 'Myriad Pro SemiBold',
        bold: I18nManager.isRTL ? 'DIN Next LT W23 Bold' : 'Myriad Pro Bold'
    } : {
        regular: I18nManager.isRTL ? 'DINNextLTW23-Regular' : 'MyriadPro-Regular',
        semi_bold: I18nManager.isRTL ? 'DINNextLTW23-Medium' : 'MyriadPro-SemiBold',
        bold: I18nManager.isRTL ? 'DINNextLTW23-Bold' : 'MyriadPro-Bold'
    },
    text: {
        textPrimary: '#242424',
        dark: '#242424',
        light: '#FFFFFF',
        placeholder: '#FFFFFF',
        borderLight: '#FFFFFF',
        borderFocus: '#80CBC4',
        lightBlue: '#0184FF',
        grey: '#999',
        black: '#000',
        s1: RFValue(44, SCREEN_HEIGHT_REFERENCE),
        s2: RFValue(32, SCREEN_HEIGHT_REFERENCE),
        s3: RFValue(28, SCREEN_HEIGHT_REFERENCE),
        s4: RFValue(25, SCREEN_HEIGHT_REFERENCE),
        s5: RFValue(23, SCREEN_HEIGHT_REFERENCE),
        s6: RFValue(20, SCREEN_HEIGHT_REFERENCE),
        s7: RFValue(17, SCREEN_HEIGHT_REFERENCE),
        s8: RFValue(16, SCREEN_HEIGHT_REFERENCE),
        s85: RFValue(15.5, SCREEN_HEIGHT_REFERENCE),
        s89: RFValue(14.2, SCREEN_HEIGHT_REFERENCE),
        s9: RFValue(14, SCREEN_HEIGHT_REFERENCE),
        s10: RFValue(12, SCREEN_HEIGHT_REFERENCE),
        s11: RFValue(10, SCREEN_HEIGHT_REFERENCE),
        s12: RFValue(8, SCREEN_HEIGHT_REFERENCE),
    },
    notifications: {
        headerBackground: colors.secondary, headerTitle: '#ffffff', headerBack: '#1C2340', background: '#F9F9FF'
    },
    orderListItem: {
        background: '#fff',
        cancelIconBackground: '#FE2121',
        checkIconBackground: '#1DBF73',
        shippedIconBackground: '#01C1E5',
        shippedButtonBackground: '#FFBC00',
        icon: '#FFFFFF'
    },
    orderHistory: {
        background: '#F9F9FF',
        emptyOrderBackground: '#FFFFFF',
        title: '#1C2340',
        description: '#888C9B',
        buttonTitle: '#FFFFFF',
        buttonBackground: colors.secondary
    },
    trackOrder: {
        headerBackground: '#FFFFFF',
        headerIcon: '#1C2340',
        headerTitle: '#1C2340',
        background: '#F9F9FF',
        contentBackground: '#FFFFFF',
        orderCodeBackground: '#F9FAFB',
        label: '#1C2340',
        lightLabel: '#8A8D9F',
        code: colors.secondary,
        price: '#FE2121',
        buttonTitle: '#FFFFFF',
        buttonBackground: colors.secondary
    },
    orderTrackMap: {
        headerBackground: '#FFFFFF',
        headerIcon: '#1C2340',
        headerTitle: '#1C2340',
        background: '#F9F9FF',
        orderCodeBackground: '#F9FAFB',
        label: '#1C2340',
        code: '#01C1E5',
        price: '#FE2121',
        stepsProgress: '#01C1E5',
        bottomSheetIndicator: '#8A8D9F',
        mapPath: '#01C1E5'
    },
    successOrder: {
        backgroundColor: '#F9F9FF',
        modalBackground: '#FFFFFF',
        title: '#1C2340',
        info: '#888C9B',
        viewOrdersButtonBackground: colors.secondary,
        viewOrdersButtonTitle: '#FFFFFF',
        continueButtonBackground: colors.secondary,
        continueButtonTitle: colors.secondary
    },
    paymentHistory: {
        headerBackground: colors.secondary,
        headerTitle: '#ffffff',
        headerBack: '#1C2340',
        background: '#F9F9FF',
        typeBackground: '#FFFFFF'
    },
    editAddress: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        inputBackground: '#FFFFFF',
        label: '#000000',
        removeIcon: '#FE2121'
    },
    addAddress: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        cardBackground: '#ffffff'
    },
    chooseCountry: {
        headerBackground: '#FFFFFF',
        headerTitle: '#1C2340',
        headerIcon: '#1C2340',
        background: '#F9F9FF',
        contentBackground: '#FFFFFF',
        separator: '#dedede',
        searchIcon: '#8A8D9F',
        searchPlaceHolder: '#8A8D9F',
        searchBarBackground: '#FFFFFF',
        country: '#1C2340',
        noResult: '#bcbcbc'
    }
};

export default lightTheme;
