import { StyleProp } from 'react-native';

export interface HeartProps {
    size?: number;
    isFavorite: boolean;
    disable?: boolean;
    style?: StyleProp<any> | StyleProp<any>[];
    onToggleFavorite?: () => void;
    radius?: number;
    type?: 'solid' | 'outline';
}
