import {StyleProp} from 'react-native';

export interface ReviewItemProps {
    ownerName: string;
    ownerImageUrl?: string;
    date: string;
    rating: number;
    comment: string;
    onPress?: () => void;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
