import { createSlice } from "@reduxjs/toolkit";

const amountOfPortraitsFindedSlice = createSlice({
    name: 'amountOfPortraitsFinded',
    initialState: {amountOfPortraitsFinded: 0},
    reducers: {
        changeAmountOfPortraitsFinded(state, action){
            const amountOfPortraitsFinded = action.payload;
            state.amountOfPortraitsFinded = amountOfPortraitsFinded;
        }
    }
})

export const {changeAmountOfPortraitsFinded} = amountOfPortraitsFindedSlice.actions;
export default amountOfPortraitsFindedSlice.reducer;