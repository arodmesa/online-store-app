import { createSlice } from "@reduxjs/toolkit";

const activeCategorySlice = createSlice({
    name: "activeCategory",
    initialState: {
        category: 'all'
    },
    reducers: {
        changeActiveCategory(state, action){
            const categoryName = action.payload;
            state.category = categoryName;          
        }
    }
})

export const {changeActiveCategory} = activeCategorySlice.actions;
export default activeCategorySlice.reducer;