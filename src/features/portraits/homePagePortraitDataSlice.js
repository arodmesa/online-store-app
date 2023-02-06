import { createSlice } from "@reduxjs/toolkit";

const homePagePortraitDataSlice = createSlice({
    name: 'homePagePortraitData',
    initialState: {homePagePortraitData: []},
    reducers: {
        changeHomePagePortraitData(state, action){
            const newPortraitData = action.payload;
            state.homePagePortraitData = newPortraitData;
        }
    }
})

export const {changeHomePagePortraitData} = homePagePortraitDataSlice.actions;
export default homePagePortraitDataSlice.reducer;