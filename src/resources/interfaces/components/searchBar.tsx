import { StyleProp, TextInputAndroidProps } from 'react-native';

export interface SearchBarProps extends TextInputAndroidProps {
    type?: 'large' | 'small';
    iconSize?: number;
    iconStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
    textInputStyle?: StyleProp<any> | StyleProp<any>[];
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    onChangeText?: (string) => void;
    onEndEditing?: (string) => void;
}
