import { ProductProps } from "./homeTabList";
import { WishState } from "./wishList";

export interface ItemCartProps extends ProductProps {
    itemCartId: number;
    power: boolean;
    leftDegree?: number;
    rightDegree?: number;
    color: string;
    quantity: number;
    isExist: boolean;

}

export interface CartState {
    cartList: ItemCartProps[];
}

export interface CartProps {
    navigation?: any;
    cart: CartState;
    wish: WishState;
}
