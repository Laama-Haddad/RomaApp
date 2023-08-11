import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AlertState} from '../../resources/interfaces/alert';

const initialState: AlertState = {
  isVisible: false,
  message: '',
  title: '',
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (
      state,
      action: PayloadAction<{title: string; message: string}>,
    ) => {
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.isVisible = true;
    },
    hideAlert: state => {
      state.isVisible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {showAlert, hideAlert} = alertSlice.actions;

export default alertSlice.reducer;
