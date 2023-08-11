import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ModalMessage, ModalState} from "../../resources/interfaces/connected-components/modal";

const initialState: ModalState = {
    isVisible: false,
    message: '',
    title: '',
    type: 'info',
    onConfirm: null,
    onReject: null,
};

export const modalSlice = createSlice({
    name: 'modal', initialState, reducers: {
        showModal: (state, action: PayloadAction<ModalMessage>,) => {
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.isVisible = true;
            state.type = action.payload.type;
            state.onConfirm = action.payload.onConfirm;
            state.onReject = action.payload.onReject;
        }, hideModal: state => {
            state.isVisible = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {showModal, hideModal} = modalSlice.actions;

export default modalSlice.reducer;
