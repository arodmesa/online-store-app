import { createSlice } from "@reduxjs/toolkit";

const horizontalBarsIconVisibilitySlice = createSlice({
    name: 'isHorizontalBarsIconVisible',
    initialState: {isHorizontalBarsIconVisible: true},
    reducers: {
        changeHorizontalBarsIconVisibility(state, action){
            state.isHorizontalBarsIconVisible = action.payload;
        }
    }
})

export const {changeHorizontalBarsIconVisibility} = horizontalBarsIconVisibilitySlice.actions;
export default horizontalBarsIconVisibilitySlice.reducer;