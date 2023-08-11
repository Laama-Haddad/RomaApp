import { StyleProp } from 'react-native';

export interface OfferVerticalCardProps {
    productId: number;
    productName: string;
    productImageUrl: string;
    offerValue: number;
    productPrice: number;
    favorite: boolean,
    offerTime?: number;
    isAddedToCart?: boolean;
    onPressCartIcon?: ({inCart: boolean, id: number}) => void;
    onPressHeartIcon?: ({inFavoriteList: boolean, id: number}) => void;
    onPress?: () => void;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
