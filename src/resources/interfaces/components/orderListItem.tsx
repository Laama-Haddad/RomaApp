import {StyleProp} from 'react-native';

export interface OrderListItemProps {
    // status: 'cancel' | 'delivered' | 'shipped';
    status:string;
    orderNumber: string;
    date: string;
    numOfItems: number;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
    onPress?: () => void;
}
