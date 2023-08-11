import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from "../../../resources/interfaces/screens/cart";
import { ItemCartProps } from "../../../resources/interfaces/screens/cart";

const initialState: CartState = {
    cartList: [],
};

export const cartSlice = createSlice({
    name: 'cart', initialState, reducers: {
        addToCart: (state, action: PayloadAction<{ cartList: ItemCartProps[] }>,) => {
            state.cartList = action.payload.cartList;
        },
    },
});

// Action creators are generated for each case reducer function
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
