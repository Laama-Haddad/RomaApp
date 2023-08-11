import {StyleProp} from 'react-native';

export interface CircleIconProps {
    borderRadius?: number;
    backgroundColor?: string;
    iconName: string;
    iconType: string;
    iconColor: string;
    iconSize?: number;
    onPress?: () => void;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
