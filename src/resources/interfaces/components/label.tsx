import { StyleProp } from 'react-native';

export interface LabelProps {
    title: string;
    titleStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
    onPress?: () => void;
}
