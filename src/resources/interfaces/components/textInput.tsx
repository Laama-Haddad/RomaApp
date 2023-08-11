import { TextInputAndroidProps } from "react-native";

export interface TextInputProps extends TextInputAndroidProps {
    containerStyle?: Object | any[];
    labelStyle?: Object | any[];
    inputStyle?: Object | any[];
    label?: string;
    secureTextEntry?: boolean;
    children?: any;
    keyboardType?: string;
    returnKeyType?: string;
    noEye?: boolean;
    required?: boolean;
    showLeftIcon?: boolean;
    onLeftIconPress?: () => void;
    leftIconColor?: string;
    leftIconName?: string;
    leftIconType?: string;
    leftIconSize?: number;
    leftIconStyle?: Object | any[];
    showRightIcon?: boolean;
    onRightIconPress?: () => void;
    rightIconColor?: string;
    rightIconName?: string;
    rightIconType?: string;
    rightIconSize?: number;
    rightIconStyle?: Object | any[];
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    onChangeText?: (string) => void;
    onEndEditing?: (string) => void;
    maxLength?: number;
    multiline?: boolean;
    editable?: boolean;
    customLeftIcon?: () => void;
}
