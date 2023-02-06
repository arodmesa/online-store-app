import { createSlice } from "@reduxjs/toolkit";

const portraitsDataSlice = createSlice({
    name: 'portraitsData',
    initialState: {portraitsData: []},
    reducers: {
        changePortraitsData(state, action){
            const newData = action.payload;
            state.portraitsData = newData.slice();
        }
    }
})

export const {changePortraitsData} = portraitsDataSlice.actions;
export default portraitsDataSlice.reducer;