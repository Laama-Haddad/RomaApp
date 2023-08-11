import { CartState } from "./cart";
import { WishState } from "./wishList";

export interface ConfirmOrderProps {
    onToggleStep: ({headerTitle: string}) => void;
    cart: CartState;
    wish: WishState;
}
