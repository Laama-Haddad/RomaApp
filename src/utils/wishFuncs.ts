import { saveWishList } from "../screens/Content/WishList/action";
import { setLocalData } from "./storage";
import { keys } from "../api/keys";


export const addItemToWishList = (list: number[], itemId: number) => {
    let temp = [...list];
    const idx = temp.findIndex(id => id === itemId);
    if (idx === -1) {
        temp.push(itemId)
    }
    return temp;
}
export const deleteItemFromWishList = (list: number[], itemId: number) => {
    let temp = [...list];
    const idx = temp.findIndex(id => id === itemId);
    if (idx > -1)
        temp.splice(idx, 1);
    return temp;
}
export const updateWishList = async (wishList: number[], itemId: number, isFavorite: boolean) => {
    if (isFavorite) {
        const newWishList = addItemToWishList(wishList, itemId)
        saveWishList(newWishList);
        await setLocalData(keys.FAVORITE, newWishList);
    } else {
        const newWishList = deleteItemFromWishList(wishList, itemId);
        saveWishList(newWishList);
        await setLocalData(keys.FAVORITE, newWishList);
    }
}
