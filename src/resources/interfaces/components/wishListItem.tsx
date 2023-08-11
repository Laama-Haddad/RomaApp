export interface WishListItemProps {
    productId: number,
    height: number;
    imageUrl: string;
    title: string;
    price: number;
    isFavorite?: boolean;
    starsCount?: number;
    containerStyle?: Object | any[];
    toggleFavorite?: ({isFavorite: boolean, id: number}) => void;
    isAddedToCart?: boolean;
    onPressCartIcon?: ({inCart: boolean, id: number}) => void;
    onPress?: () => void;
}
