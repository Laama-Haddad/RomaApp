import { StyleProp } from 'react-native';

export interface OfferHorizontalCardProps {
    imageUri: string;
    offerValue: number;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
    onPress?: () => void;
}
