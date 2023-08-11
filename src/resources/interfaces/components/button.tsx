import { StyleProp } from 'react-native';

export interface GenericButtonProps {
    title: string;
    titleStyle?: StyleProp<any> | StyleProp<any>[];
    radius?: number;
    disabled?: boolean;
    onPress: () => void;
    showRightIcon?: boolean;
    rightIconName?: string;
    rightIconType?: string;
    rightIconColor?: string;
    rightIconSize?: number;
    rightIconStyle?: StyleProp<any> | StyleProp<any>[];
    showRightText?: boolean;
    rightText?: string;
    rightTextStyle?: StyleProp<any> | StyleProp<any>[];
    showLeftIcon?: boolean;
    leftIconName?: string;
    leftIconType?: string;
    leftIconColor?: string;
    leftIconSize?: number;
    leftIconStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
