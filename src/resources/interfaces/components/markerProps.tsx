import {StyleProp} from 'react-native';

export interface MarkerProps {
    style?: StyleProp<any> | StyleProp<any>[];
    type?: string;
    radius?: number;
    color?: string;
    onPress?: () => void;
}
