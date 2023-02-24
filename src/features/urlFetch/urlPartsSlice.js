import { createSlice } from "@reduxjs/toolkit";
import { beginingUrlPartCategory, beginingUrlPartColor, beginingUrlPartSearchText, beginingUrlPartPage } from "../../constants";

const urlPartsSlice = createSlice({
    name:'apiUrlParts',
    initialState: {
        categoryURL: beginingUrlPartCategory+'all',
        colorURL: beginingUrlPartColor+'all',
        searchTextURL: beginingUrlPartSearchText + '',
        pageURL: beginingUrlPartPage + '1'
    },
    reducers: {
        changeCategoryURL(state, action){
            const newCategoryName = action.payload;
            state.categoryURL = beginingUrlPartCategory + newCategoryName;
        },
        changeColorURL(state, action){
            const newColorName = action.payload;
            state.colorURL = beginingUrlPartColor + newColorName;
        },
        changeSearchTextURL(state, action){
            const newSearchText = action.payload;
            state.searchTextURL = beginingUrlPartSearchText + newSearchText;
        },
        changePageURL(state, action){
            const newPage = action.payload;
            state.pageURL = beginingUrlPartPage + newPage
        }
    }
})

export const {changeCategoryURL, changeColorURL, changeSearchTextURL, changePageURL} = urlPartsSlice.actions;
export default urlPartsSlice.reducer;