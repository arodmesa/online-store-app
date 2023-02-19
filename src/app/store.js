import {configureStore} from '@reduxjs/toolkit';
import activeCategoryReducer from '../features/lateralSearchBar/activeCategorySlice';
import activeColorReducer from '../features/lateralSearchBar/activeColorSlice';
import urlPartsReducer from '../features/urlFetch/urlPartsSlice';
import areAllPortraitsLoadedReducer from '../features/portraits/areAllPortraitsLoadedSlice';
import amountOfLoadedPortraitsReducer from '../features/portraits/amountOfLoadedPortraitsSlice';
import percentageOfLoadedPortraitsReducer from '../features/portraits/percentageOfLoadedPortraitsSlice';
import searchInputTextReducer from '../features/lateralSearchBar/searchInputTextSlice';
import userEmailAddressReducer from '../features/emailSubscription/userEmailAddressSlice';
import enableSubscribeButtonReducer from '../features/emailSubscription/enableSubscribeButtonSlice';
import defaultAmountOfPortraitsToAddCartReducer from '../features/portraitDetails/defaultAmountOfPortraitsToAddCartSlice';
import currentPageNumberReducer from '../features/paging/currentPageNumberSlice';
import amountOfResultsPagesReducer from '../features/paging/amountOfResultsPagesSlice';
import portraitsDataReducer from '../features/portraits/portraitsDataSlice';
import amountOfPortraitsFindedReducer from '../features/portraits/amountOfPortraitsFindedSlice';
import portraitDetailsReducer from '../features/portraitDetails/portraitDetailsSlice';
import portraitsInCartReducer from '../features/cart/portraitsInCartSlice';
import amountOfUniquePortraitsInCartReducer from '../features/cart/amountOfUniquePortraitsInCartSlice';
import totalPriceOfPurchaseReducer from '../features/cart/totalPriceOfPurchaseSlice';
import homePagePortraitDataReducer from '../features/portraits/homePagePortraitDataSlice';
import notificationTextReducer from '../features/notificationBar/notificationTextSlice';
import horizontalBarsIconVisibilityReducer from '../features/navBar/horizontalBarsIconVisibilitySlice';

const store = configureStore({
    reducer: {
        activeCategoryReducer,
        activeColorReducer,
        urlPartsReducer,
        areAllPortraitsLoadedReducer,
        amountOfLoadedPortraitsReducer,
        percentageOfLoadedPortraitsReducer,
        searchInputTextReducer,
        userEmailAddressReducer,
        enableSubscribeButtonReducer,
        defaultAmountOfPortraitsToAddCartReducer,
        currentPageNumberReducer,
        amountOfResultsPagesReducer,
        portraitsDataReducer,
        amountOfPortraitsFindedReducer,
        portraitDetailsReducer,
        portraitsInCartReducer,
        amountOfUniquePortraitsInCartReducer,
        totalPriceOfPurchaseReducer,
        homePagePortraitDataReducer,
        notificationTextReducer,
        horizontalBarsIconVisibilityReducer,
    }
})

export default store;