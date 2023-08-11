import { StyleProp } from 'react-native';

export interface ColorItemProps {
    id: number;
    color: string;
}

export interface CircleColorProps {
    colorItem: ColorItemProps;
    radius?: number;
    showBorder?: boolean;
    style?: StyleProp<any> | StyleProp<any>[];
    selected?: boolean
}
