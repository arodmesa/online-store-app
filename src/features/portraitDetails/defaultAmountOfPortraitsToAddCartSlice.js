import { createSlice } from "@reduxjs/toolkit";

const defaultAmountOfPortraitsToAddCartSlice = createSlice({
    name: 'defaultAmountOfPortraitsToAddCart',
    initialState: {defaultAmountOfPortraits: 1},
    reducers: {
        incrementDefaultAmount(state){
            state.defaultAmountOfPortraits += 1;
        },
        decrementDefaultAmount(state){
            if (state.defaultAmountOfPortraits > 1){
                state.defaultAmountOfPortraits -= 1;
            }
        },
        resetDefaultAmount(state){
            state.defaultAmountOfPortraits = 1;
        }
    }
})

export const {incrementDefaultAmount, decrementDefaultAmount, resetDefaultAmount} = defaultAmountOfPortraitsToAddCartSlice.actions;
export default defaultAmountOfPortraitsToAddCartSlice.reducer;