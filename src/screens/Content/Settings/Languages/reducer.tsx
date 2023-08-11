import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangState } from "../../../../resources/interfaces/screens/Settings/languages";
import { LanguageItemProps } from "../../../../resources/interfaces/items/languageItem";

const initialState: LangState = {
    language: {}
};

export const LanguageSlice = createSlice({
    name: 'lang', initialState, reducers: {
        setLanguage: (state, action: PayloadAction<{ language: LanguageItemProps }>,) => {
            state.language = action.payload.language;
        },
    },
});


// Action creators are generated for each case reducer function
export const {setLanguage} = LanguageSlice.actions;

export default LanguageSlice.reducer;
