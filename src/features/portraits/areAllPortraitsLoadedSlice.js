import { createSlice } from "@reduxjs/toolkit";

const areAllPortraitsLoadedSlice = createSlice({
    name: "areAllPortraitsLoaded",
    initialState: {areLoaded: false},
    reducers: {
        changeAreAllPortraitsLoaded(state, action){
            const areAllPortraitsLoaded = action.payload;
            state.areLoaded = areAllPortraitsLoaded;
        }
    }
})

export const {changeAreAllPortraitsLoaded} = areAllPortraitsLoadedSlice.actions;
export default areAllPortraitsLoadedSlice.reducer;