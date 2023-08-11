import { store } from '../../../redux/store'
import { addToCart } from './reducer';
import { ItemCartProps } from "../../../resources/interfaces/screens/cart";

export const saveCartList = (cartList: ItemCartProps[]) => {
    store.dispatch(addToCart({
        cartList
    }),);
};

