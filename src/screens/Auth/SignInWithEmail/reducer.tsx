import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../../resources/interfaces/screens/signInWithEmail';

const initialState: AuthState = {
    logged: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{ logged: boolean }>,
        ) => {
            state.logged = action.payload.logged;
        },
    },
});

// Action creators are generated for each case reducer function
export const {setAuth} = authSlice.actions;

export default authSlice.reducer;
