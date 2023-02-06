import { createSlice } from "@reduxjs/toolkit";

const portraitDetailsSlice = createSlice({
    name: 'portraitDetails',
    initialState: {portraitDetails: {}},
    reducers: {
        changePortraitDetails(state, action){
            const portraitDetails = action.payload;
            state.portraitDetails = portraitDetails;
        }
    }
})

export const {changePortraitDetails} = portraitDetailsSlice.actions;
export default portraitDetailsSlice.reducer;
