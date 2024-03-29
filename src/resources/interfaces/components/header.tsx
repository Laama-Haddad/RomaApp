import { StyleProp } from 'react-native';

export interface HeaderProps {
    noPaddingTop?: boolean;
    isModal?: boolean;
    backgroundHeader?: string;
    titleImage?: boolean;
    titleImageStyle?: StyleProp<any> | StyleProp<any>[];
    title?: string;
    titleStyle?: StyleProp<any> | StyleProp<any>[];
    subTitle?: string;
    subTitleStyle?: StyleProp<any> | StyleProp<any>[];
    titleColor?: string;
    backColor?: string;
    menuColor?: string;
    rightIconName?: string;
    onRightPress?: () => void;
    rightIconType?: string;
    rightIconSize?: number;
    rightIconColor?: string;
    rightIconStyle?: StyleProp<any> | StyleProp<any>[];
    rightTextStyle?: StyleProp<any> | StyleProp<any>[];
    iconSize?: string | number;
    showLine?: boolean;
    onBackPress?: () => void;
    onMenuPress?: () => void;
    showRightIcon?: boolean;
    isLight?: boolean;
    showRightText?: boolean;
    rightText?: string;
    showBackButton?: boolean;
    showMenuButton?: boolean;
    showLeftText?: boolean;
    leftTextStyle?: StyleProp<any> | StyleProp<any>[];
    leftText?: string;
    onLeftPress?: () => void;
    customLeftCompo?: () => void;
    customRightCompo?: () => void;
    searchCompo?: () => void;
    showSearchBar?: boolean;
}
