import { StyleProp } from 'react-native';

export interface CartItemProps {
    productId: number;
    height: number;
    imageUrl: string;
    title: string;
    price: string;
    size: string;
    color: string;
    favorite: boolean;
    starsCount?: number;
    selectedQuantity: number;
    onQuantityChange: ({quantity, id: number}) => void;
    toggleFavorite?: ({isFavorite: boolean, id: number}) => void;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
