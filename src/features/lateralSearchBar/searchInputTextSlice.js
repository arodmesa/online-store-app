import store from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { changeSearchTextURL } from "../urlFetch/urlPartsSlice";

const searchInputTextSlice = createSlice({
    name: 'searchInputText',
    initialState: {inputText: ''},
    reducers: {
        changeSearchInputText(state, action){
            const inputText = action.payload;
            state.inputText = inputText;
            if (inputText === ''){
                setTimeout(()=>store.dispatch(changeSearchTextURL('')), 0)
            }
        }
    }
})

export const {changeSearchInputText} = searchInputTextSlice.actions;
export default searchInputTextSlice.reducer;