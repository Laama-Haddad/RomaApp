import { CartState } from "./cart";

export interface WishState {
    wishList: number[];
}

export interface WishListProps {
    navigation?: any;
    wish: WishState;
    cart: CartState;
}
