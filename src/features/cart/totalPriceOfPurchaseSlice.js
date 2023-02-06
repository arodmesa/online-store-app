import { createSlice } from "@reduxjs/toolkit";

const totalPriceOfPurchaseSlice = createSlice({
    name: 'totalPriceOfPurchase',
    initialState: {totalPriceOfPurchase: 0},
    reducers: {
        calculateTotalPriceOfPurchase(state, action){
            const cartContent = action.payload;
            let totalPriceOfPurchase = 0;
            for (const portraitID in cartContent){
                totalPriceOfPurchase += cartContent[portraitID].subtotal;
            }
            state.totalPriceOfPurchase = totalPriceOfPurchase;
        }
    }
})

export const {calculateTotalPriceOfPurchase} = totalPriceOfPurchaseSlice.actions;
export default totalPriceOfPurchaseSlice.reducer;