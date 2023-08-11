import React from 'react';
import { HeaderProps } from '../components/header';
import { StyleProp } from "react-native";

export interface MainLayoutProps extends HeaderProps {
    tabHeader?: boolean;
    cancelHeader?: boolean;
    closeHeader?: boolean;
    backHeader?: boolean;
    customLeftHeader?: boolean;
    tabPage?: boolean;
    enableScroll?: boolean;
    noPadding?: boolean;
    backgroundColor?: string;
    bottomSpace?: boolean;
    keyboardAvoidScrollView?: boolean;
    enableOnAndroid?: boolean;
    onScroll?: () => void;
    children?: any;
    headerRef?: React.Ref<any>;
    showCurve?: boolean;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
