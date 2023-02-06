import { createSlice } from "@reduxjs/toolkit";

const activeColorSlice = createSlice({
    name: "activeColor",
    initialState: {
        color: 'all'
    },
    reducers: {
        changeActiveColor(state, action){
            const newColorName = action.payload;
            state.color = newColorName;           
        }
    }
})

export const {changeActiveColor} = activeColorSlice.actions;
export default activeColorSlice.reducer;