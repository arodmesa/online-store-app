import { createSlice } from "@reduxjs/toolkit";

const percentageOfLoadedPortraitsSlice = createSlice({
    name: "percentageOfLoadedPortraits",
    initialState: {percentage: 0},
    reducers: {
        changePercentageOfLoadedPortraits(state, action){
            const percentage = action.payload;
            state.percentage = (percentage === Infinity)?0:percentage;
        }
    }
})

export const {changePercentageOfLoadedPortraits} = percentageOfLoadedPortraitsSlice.actions;
export default percentageOfLoadedPortraitsSlice.reducer;