import { StyleProp } from 'react-native';

export interface RangeSliderProps {
    min: number;
    max: number;
    selectedRangeColor?: string;
    onValueChange: (low, high: number) => void;
    labelStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
