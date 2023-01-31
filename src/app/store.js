import {configureStore} from '@reduxjs/toolkit';
import activeCategoryReducer from '../features/lateralSearchBar/activeCategorySlice';
import activeColorReducer from '../features/lateralSearchBar/activeColorSlice';

const store = configureStore({
    reducer: {
        activeCategoryReducer,
        activeColorReducer,
    }
})

export default store;