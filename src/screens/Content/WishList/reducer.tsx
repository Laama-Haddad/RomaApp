import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishState } from "../../../resources/interfaces/screens/wishList";

const initialState: WishState = {
    wishList: [],
};
export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWishList: (
            state,
            action: PayloadAction<{ wishList: number[] }>,
        ) => {
            state.wishList = action.payload.wishList;
        },
    },
});

// Action creators are generated for each case reducer function
export const {addToWishList} = wishSlice.actions;

export default wishSlice.reducer;
