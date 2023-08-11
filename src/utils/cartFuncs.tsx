import { ItemCartProps } from "../resources/interfaces/screens/cart";
import { setLocalData } from "./storage";
import { keys } from "../api/keys";
import { saveCartList } from "../screens/Content/Cart/action";
import { showGlobalAlert } from "../connected-components/Alert/actions";
import { tr } from "../resources/translations";

export const addItemToCart = (list: ItemCartProps[], newItem: ItemCartProps) => {
    let temp = [...list];
    const idx = temp.findIndex(item => item.id === newItem.id);
    if (idx > -1) {
        temp[idx] = newItem;
    } else {
        temp.push(newItem)
    }
    return temp;
}
export const deleteItemFromCart = (list: ItemCartProps[], id: number) => {
    let temp = [...list];
    const idx = temp.findIndex(item => item.id === id);
    if (idx > -1)
        temp.splice(idx, 1);
    return temp;
}
export const updateCartList = async (cartList: ItemCartProps[], item: ItemCartProps, inCart: boolean) => {
    if (inCart) {
        const newCartList = addItemToCart(cartList, item)
        saveCartList(newCartList);
        if (await setLocalData(keys.CART, newCartList)) {
            showGlobalAlert({
                title: tr('cart.addedToCartTitle'),
                message: tr('cart.addedToCartMessage')
            });

        } else {
            showGlobalAlert({
                title: tr('cart.addedToCartTitle'),
                message: tr('cart.notAddedToCart')
            });
        }
    } else {
        const newCartList = deleteItemFromCart(cartList, item.id);
        saveCartList(newCartList);
        if (await setLocalData(keys.CART, newCartList)) {
            showGlobalAlert({
                title: tr('cart.deleteFromCartTitle'),
                message: tr('cart.deleteFromCartMessage')
            });
        } else {
            showGlobalAlert({
                title: tr('cart.deleteFromCartTitle'),
                message: tr('cart.notDeletedFromCart')
            });
        }

    }
}
