import { createSlice } from "@reduxjs/toolkit";

const amountOfUniquePortraitsInCartSlice = createSlice({
    name: 'amountOfUniquePortraitsInCart',
    initialState: {amountOfUniquePortraitsInCart: 0},
    reducers: {
        incrementAmountOfUniquePortraitsInCart(state){
            state.amountOfUniquePortraitsInCart += 1;
        },
        decrementAmountOfUniquePortraitsInCart(state){
            if (state.amountOfUniquePortraitsInCart > 0){
                state.amountOfUniquePortraitsInCart -= 1;
            }
        },
        resetAmountOfUniquePortraitsInCart(state){
            state.amountOfUniquePortraitsInCart = 0;
        }
    }
})

export const { incrementAmountOfUniquePortraitsInCart, decrementAmountOfUniquePortraitsInCart, resetAmountOfUniquePortraitsInCart} = amountOfUniquePortraitsInCartSlice.actions;
export default amountOfUniquePortraitsInCartSlice.reducer;