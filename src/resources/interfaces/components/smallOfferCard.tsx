import { StyleProp } from 'react-native';

export interface SmallOfferCardProps {
    productImageUrl: string;
    buyNumber?: number;
    freeNumber?: number;
    discount?: number;
    type?: 'normal' | 'sale' | 'offer';
    onPress?: () => void;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
    title?: string;
    titleStyle?: StyleProp<any> | StyleProp<any>[];
}
