export interface Colors {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    info: string;
}

export interface Theme {
    primary: string;
    secondary: string;
    info: string;
    homeBackground: string;
    homeBackground1: string;
    loading: {
        background: string; label: string; indicator: string;
    };
    languages: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; contentBackground; checkIcon: string; separator: string; language: string;
    };
    profileDetails: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; contentBackground: string; label: string; creditAmount: string; inputPlaceHolder: string; editIcon: string; activeEditIcon: string; submitBackground: string; submitTitle: string;
    };
    settings: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; contentBackground: string; label: string; lightLabel: string; arrowIcon: string; accountsBackground: string; accounts: string; options: string; itemLeftIcon: string;
    };
    faq: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string;
    };
    deliveryReview: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; reviewBackground: string; title: string; info: string; emptyStar: '#C8C8D3', fullStar: string; inputText: string; inputPlaceHolder: string; inputBackground: string; submitBackground: string; submitTitle: string;
    };
    myAddresses: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; addressBackground: string; addressTitle: String; addressDetails: string;
    };
    checkout: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string;
    };
    confirmOrder: {
        background: string; label: string; number: string; cartItemBackground: string; deliveryIcon: string; deliveryIconBackground: string; deliveryPrice: string; lightLabel: string; deliveryBackground: string; paymentIcon: string; paymentIconBackground: string; optionsIcon: string; creditBackground: string; totalAmountBackground: string;
    };
    payment: {
        background: string; inputBackground: string; buttonRightText: string; buttonLeftIcon: string; buttonRightIcon: string; buttonBackground: string; buttonTitle: string;
    };
    delivery: {
        background: string; deliveryWayBackground: string; way: string; selectedWay: string; period: string; selectedIcon: string; unSelectedIconBorder: string; info: string;
    };
    address: {
        background: string; addressBackground: string; addressTitle: string; addressDetails: string; inputIcon: string; inputPlaceHolder: string; buttonBackground: string; buttonTitle: string; check: string;
    };
    profile: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; topBackground: string; bottomBackground: String; editIcon: string; editIconBackground: string; label: string; balance: string; itemIcon: string; itemIconBackground: string;
    };
    wishList: {
        headerBackground: string; headerIcon: string; headerTitle: string; background: string; label: string; emptyWishListContainerBackground: string; buttonBackground: string;
    };
    cart: {
        headerBackground: string; headerIcon: string; headerTitle: string; background: string; topBackground: string; cartIcon: string; cartBackground: string; number: string; label: string; buttonTitle: string; buttonBackground: string; emptyCartListContainerBackground: string; checkoutContainerBackground: string;
    };
    sightPower: {
        headerBackground: string; headerIcon: string; headerTitle: string; background: string; title: string; titleBackground: string; value: string; checkIcon: string; separator: string; submitTitle: string; submitBackground: string;
    };
    productDetails: {
        background: string; headerIcon: string; headerTitle: string; label: string; stars: string; backgroundButton: string; quantity: string; minus: string; plus: string; submitTitle: string; price: string; backgroundColorsContainer: string; titleColorsContainer: string;
    };
    homeFilter: {
        background: string; headerIcon: string; headerTitle: string; contentBackground: string; activeTypeTitle: string; inActiveTypeTitle: string; typeBackground: string; noResult: string;
    };
    home: {
        background: string; headerIcon: string; filterIcon: string; typeBackground: string; activeTypeTitle: string; inActiveTypeTitle: string; noResult: string;
    };
    changePassword: {
        contentBackground: string; headerBackground: string; headerBackIcon: string; headerTitle: string; inputBackground: string; inputText: string; inputPlaceHolder: string; errorText: string; submitTitle: string; submitBackground: string;
    };
    forgetPassword: {
        contentBackground: string; headerBackground: string; headerBackIcon: string; headerTitle: string; info: string; inputBackground: string; inputText: string; inputPlaceHolder: string; emailSent: string; noCode: String; resend: string; submitTitle: string; submitBackground: string;
    };
    phoneVerification: {
        contentBackground: string; headerBackground: string; headerBackIcon: string; headerTitle: string; title: string; subTitle: string; info: string; resendCode: string; time: string; submitTitle: string; submitBackground: string;
    };
    signInWithPhone: {
        contentBackground: string; headerBackground: string; headerBackIcon: string; headerTitle: string; title: string; subTitle: string; inputBackground: string; checkIcon: string; checkIconBackground: string; inputPlaceHolder: string; inputText: string; submitBackground: string; submitTitle: string; notAlready: string; signUp: string; globeIcon: string;
    };
    signInWithEmail: {
        contentBackground: string; headerBackground: string; headerBackIcon: string; headerTitle: string; title: string; subTitle: string; inputBackground: string; inputIcon: string; inputPlaceHolder: string; inputText: string; checkIcon: string; checkIconBackground: string; remember: string; forget: string; submitBackground: string; submitTitle: string; notAlready: string; signUp: string;
    };
    location: {
        contentBackground: string; headerBackground: string; headerBackIcon: string; headerTitle: string; submitBackground: string; submitTitle: string;
    };
    signUp: {
        contentBackground: string; headerBackground: string; headerTitle: string; headerBackIcon: string; title: string; subTitle: string; inputBackground: string; inputText: string; inputPlaceHolder: string; or: string; line: string; buttonBackground: string; buttonTitle: string; alreadyAccount: string; signIn: string; emailIcon: string; checkIcon: string; checkIconBackground: string; globeIcon: string;
    };
    welcomeWithEmail: {
        bottomBackground: string; title: string; description: string; buttonRegisterText: string; buttonRegisterBackground: string; buttonLoginText: string; buttonLoginBackground: string; backIcon: string;
    };
    welcome: {
        bottomBackground: string; text: string; buttonText: string; buttonBackground: string; triangle: string;
    };
    splashChooseLanguage: {
        background: string; logoBackground: string; languagesBackground: string; language: string; checkIcon: string; submitBackground: string; submitTitle: string;
    };
    bottomTabs: {
        
        
        barBackground: string; activeTabBackground: string; label: string; icon: string;
    };
    drawer: {
        background: string; profileImageBackground: string; profileName: string; itemsBackground: string; item: string; activeItem: string; pressItem: string;
    };
    modal: {
        containerBackground: string; titleBackground: string; title: string; messageBackground: string; message: string; okBackground: string; okTitle: string; borderColor: string;
    };
    homeTabButton: {
        tabBackground: string; activeTabTitle: string; inActiveTabTitle: string;
    };
    stepsProgressBar: {
        color: string; checkIcon: string; label: string; description: string;
    };
    notificationItemList: {
        background: string; title: string; description: string; icon: string; cancelledIconBackground: string; acceptedIconBackground: string; paymentIconBackground: string; promotionIconBackground: string;
    };
    verificationCode: {
        background: string; number: string; line: string;
    };
    switch: {
        switchOff: string; switchOn: string;
    };
    progressStepper: {
        circleBackground: string; circleBorder: string; connector: string; label: string; activeLabel: string; icon: string; nextButtonBackground: string; nextButtonTitle: string;
    };
    paymentItem: {
        background: string; id: string; title: string; price: string, failed: string; successfully: string; cancel: string;
    };
    offerVerticalCard: {
        background: string; iconBackground: string; icon: string; finalPrice: string; price: string; offerValue: string; offerBackground: string; productName: string; startShadow: string; finalShadow: string;
    };
    timer: {
        time: string; hoursBackground: string; minutesBackground: string; secondsBackground: string;
    };
    button: {
        icon: string;
    };
    accordionItem: {
        background: string; title: string; content: string; border: string; icon: string; iconBackground: string;
    };
    cartItem: {
        background: string; title: string; price: string; description: string; starsCount: string; minusIcon: string; plusIcon: string; quantity: string;
    };
    stars: {
        icon: string; text: string;
    };
    reviewItem: {
        ownerName: string; date: string; comment: string; border: string;
    };
    heart: {
        outlineFavorite: string; outlineUnFavorite: string; background: string; solid: string;
    };
    wishListItem: {
        background: string; title: string; price: string; starsCount: string; cartIconBackground: string; cartIcon: string; minusIcon: string; plusIcon: string; quantity: string;
    };
    circleColor: {
        border: string; selectedBorder: string;
    };
    dropDownList: {
        background: string; text: string; icon: string;
    };
    offerHorizontalCard: {
        text: string; line: string;
    };
    rangeSlider: {
        rail: string; selectedRail: string; lowThumb: string; highThumb: string; label: string;
    };
    searchBar: {
        largeSearchBarBackground: string; smallSearchBarBackground: string; largeSearchBarIcon: string; smallSearchBarIcon: string; largeSearchBarPlaceholder: string; smallSearchBarPlaceholder: string; inputText: string;
    };
    bubbleMessage: {
        sentBackground: string; receivedBackground: string; sentText: string; receivedText: string; time: string;
    };
    shippingItemCard: {
        background: string; shippingNumberText: string; date: string; itemsCount: string, icon: string; shipped: string; delivered: string; cancel: string;
    };
    smallOfferCard: {
        background: string; offerBackground: string; saleBackground: string; value: string; title: string;
    };
    textInput: {
        required: string; cursorColor: string; icon: string; eyeIcon: string; background: string; inputText: string;
    };
    alert: {
        backgroundPrimary: string; textPrimary: string;
    };
    fonts: {
        regular: string; semi_bold: string; bold: string;
    };
    text: {
        textPrimary: string; dark: string; light: string; placeholder: string; borderLight: string; borderFocus: string; lightBlue: string; grey: string; black: string; s1: number; s2: number; s3: number; s4: number; s5: number; s6: number; s7: number; s8: number; s85: number; s89: number; s9: number; s10: number; s11: number; s12: number;
    };
    notifications: {
        headerBackground: string; headerTitle: string; headerBack: string; background: string;
    };
    orderListItem: {
        background: string; cancelIconBackground: string; checkIconBackground: string; shippedIconBackground: string; shippedButtonBackground: string; icon: string;
    };
    orderHistory: {
        background: string; emptyOrderBackground: string; title: string; description: string; buttonTitle: string; buttonBackground: string;
    };
    trackOrder: {
        headerBackground: string; headerIcon: string; headerTitle: string; background: string; contentBackground: string; orderCodeBackground: string; label: string; lightLabel: string; code: string; price: string; buttonTitle: string; buttonBackground: string;
    };
    orderTrackMap: {
        headerBackground: string; headerIcon: string; headerTitle: string; background: string; orderCodeBackground: string; label: string; code: string; price: string; stepsProgress: string; bottomSheetIndicator: string; mapPath: string;
    };
    successOrder: {
        backgroundColor: string; modalBackground: String; title: string; info: string; viewOrdersButtonBackground: string; viewOrdersButtonTitle: string; continueButtonBackground: string; continueButtonTitle: string;
    };
    paymentHistory: {
        headerBackground: string; headerTitle: string; headerBack: string; background: string; typeBackground: string;
    };
    editAddress: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; inputBackground: string; label: string; removeIcon: string;
    };
    addAddress: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; cardBackground: string;
    };
    chooseCountry: {
        headerBackground: string; headerTitle: string; headerIcon: string; background: string; contentBackground; separator: string; searchIcon: string; searchPlaceHolder: string; searchBarBackground: string; country: string; noResult: string;
    };
}
