import { createSlice } from "@reduxjs/toolkit";

const amountOfResultsPagesSlice = createSlice({
    name: 'amountOfResultsPages',
    initialState: {amountOfResultsPages: 1},
    reducers: {
        changeAmountOfResultsPages(state, action){
            const newAmountOfPages = action.payload;
            state.amountOfResultsPages = newAmountOfPages;
        }
    }
})

export const {changeAmountOfResultsPages} = amountOfResultsPagesSlice.actions;
export default amountOfResultsPagesSlice.reducer;