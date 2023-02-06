import { createSlice } from "@reduxjs/toolkit";

const searchInputTextSlice = createSlice({
    name: 'searchInputText',
    initialState: {inputText: ''},
    reducers: {
        changeSearchInputText(state, action){
            const inputText = action.payload;
            state.inputText = inputText;
        }
    }
})

export const {changeSearchInputText} = searchInputTextSlice.actions;
export default searchInputTextSlice.reducer;