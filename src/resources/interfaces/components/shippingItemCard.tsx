import {StyleProp} from 'react-native';

export interface ShippingItemCardProps {
    shippingNumber: number;
    date: string;
    itemsCount: number;
    status: 'shipped' | 'delivered' | 'cancel';
    onPress?: () => void;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
