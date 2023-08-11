import { StyleProp } from 'react-native';

export interface SwitchProps {
    onValueChangeEvent?: (boolean) => void;
    value?: boolean;
    style?: StyleProp<any> | StyleProp<any>[];
}
