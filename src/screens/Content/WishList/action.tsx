import { store } from '../../../redux/store'
import { addToWishList } from './reducer';


export const saveWishList = (wishList: number[]) => {
    store.dispatch(
        addToWishList({
            wishList
        }),
    );
};

