import { createSlice } from "@reduxjs/toolkit";

const currentPageNumberSlice = createSlice({
    name: 'currentPageNumber',
    initialState: {currentPageNumber: 1},
    reducers: {
        changeCurrentPageNumber(state, action){
            const newPageNumber = action.payload;
            state.currentPageNumber = newPageNumber
        }
    }
})

export const {changeCurrentPageNumber} = currentPageNumberSlice.actions;
export default currentPageNumberSlice.reducer;