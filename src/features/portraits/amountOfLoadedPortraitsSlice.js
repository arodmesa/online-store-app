import { createSlice } from "@reduxjs/toolkit";

const amountOfLoadedPortraitsSlice = createSlice({
    name: "amountOfLoadedPortraits",
    initialState: {amountOfLoadedPortraits: 1},
    reducers: {
        changeAmountOfLoadedPortraits(state, action){
            const newAmountOfLoadedPortraits = action.payload;
            state.amountOfLoadedPortraits = newAmountOfLoadedPortraits;
        }
    }
})

export const {changeAmountOfLoadedPortraits} = amountOfLoadedPortraitsSlice.actions;
export default amountOfLoadedPortraitsSlice.reducer;
