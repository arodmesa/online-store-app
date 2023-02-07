import store from "../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { incrementAmountOfUniquePortraitsInCart, decrementAmountOfUniquePortraitsInCart, resetAmountOfUniquePortraitsInCart } from "./amountOfUniquePortraitsInCartSlice";
import { calculateTotalPriceOfPurchase } from "./totalPriceOfPurchaseSlice";
import { displayNotification } from "../notificationBar/notificationFunctionalities";

function dispatchCalculateTotalPrice (){
    const cartContent = store.getState().portraitsInCartReducer.portraitsInCart;
    store.dispatch(calculateTotalPriceOfPurchase(cartContent));
}
const portraitsInCartSlice = createSlice({
    name: 'portraitsInCart',
    initialState: {portraitsInCart: {}},
    reducers: {
        addPortraitToCart(state, action){            
            const {portraitDetails, defaultAmountOfPortraitsToAddCart} = action.payload;
            const portraitID = portraitDetails.id;            
            let mainPortraitDetails={
                [portraitID]:{
                    price: portraitDetails.webformatHeight,
                    image: portraitDetails.previewURL,
                    name: portraitDetails.tags,
                    amount: defaultAmountOfPortraitsToAddCart,
                    subtotal: portraitDetails.webformatHeight*defaultAmountOfPortraitsToAddCart
                }
            };
            if (portraitID in state.portraitsInCart){
                state.portraitsInCart[portraitID].amount += mainPortraitDetails[portraitID].amount; 
            }else{
                state.portraitsInCart = {
                    ...state.portraitsInCart,
                    ...mainPortraitDetails
                }       
                setTimeout(()=>store.dispatch(incrementAmountOfUniquePortraitsInCart()), 0);         
            }
            setTimeout(()=>{dispatchCalculateTotalPrice();displayNotification('Portrait added to the cart', 2000)}, 0);
        },
        removePortraitFromCart(state, action){
            const portraitID = action.payload;
            delete state.portraitsInCart[portraitID];
            setTimeout(()=>{store.dispatch(decrementAmountOfUniquePortraitsInCart()); dispatchCalculateTotalPrice()}, 0) 
        },
        incrementAmountOfOnePortraitInCart(state, action){
            const portraitID = action.payload;
            const newPortraitAmount = state.portraitsInCart[portraitID].amount + 1;
            const portraitPrice = state.portraitsInCart[portraitID].price; 
            state.portraitsInCart[portraitID].amount = newPortraitAmount;
            state.portraitsInCart[portraitID].subtotal = portraitPrice * newPortraitAmount;
            setTimeout(dispatchCalculateTotalPrice, 0);
        },
        decrementAmountOfOnePortraitInCart(state, action){
            const portraitID = action.payload;
            const newPortraitAmount = state.portraitsInCart[portraitID].amount - 1;
            const portraitPrice = state.portraitsInCart[portraitID].price;
            if (newPortraitAmount > 0){
                state.portraitsInCart[portraitID].amount = newPortraitAmount;
                state.portraitsInCart[portraitID].subtotal = portraitPrice * newPortraitAmount;
                setTimeout(dispatchCalculateTotalPrice, 0);
            }             
        },
        clearShoppingCart(state){
            state.portraitsInCart = {};
            setTimeout(()=>{store.dispatch(resetAmountOfUniquePortraitsInCart()); dispatchCalculateTotalPrice()}, 0)
        }
    }
})

export const {addPortraitToCart, removePortraitFromCart, incrementAmountOfOnePortraitInCart, decrementAmountOfOnePortraitInCart, clearShoppingCart} = portraitsInCartSlice.actions;
export default portraitsInCartSlice.reducer;