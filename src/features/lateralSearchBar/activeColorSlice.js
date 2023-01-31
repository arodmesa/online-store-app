import { createSlice } from "@reduxjs/toolkit";

const activeColorSlice = createSlice({
    name: "activeColor",
    initialState: {
        color: 'all'
    },
    reducers: {
        changeActiveColor(state, action){
            const colorName = action.payload
            if (state.color !== colorName){
                state.color = colorName;
            }            
        }
    }
})

export const {changeActiveColor} = activeColorSlice.actions;
export default activeColorSlice.reducer;