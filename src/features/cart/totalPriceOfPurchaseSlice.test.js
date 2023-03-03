import store from "../../app/store";
import { calculateTotalPriceOfPurchase } from "./totalPriceOfPurchaseSlice";

test('check correct slice initialization',()=>{
    const totalPriceOfPurchase = store.getState().totalPriceOfPurchaseReducer.totalPriceOfPurchase;
    expect(totalPriceOfPurchase).toBe(0);
})
describe('check calculation of totalPriceOfPurchase',()=>{
    it('case with 4 elements',()=>{
        const cartContent = {
            1: {subtotal: 25},
            2: {subtotal: 25},
            3: {subtotal: 20},
            4: {subtotal: 20}
        }
        store.dispatch(calculateTotalPriceOfPurchase(cartContent));
        const totalPriceOfPurchase = store.getState().totalPriceOfPurchaseReducer.totalPriceOfPurchase;
        expect(totalPriceOfPurchase).toBe(90);
    })
    it('case with 1 element',()=>{
        const cartContent = {
            1: {subtotal: 25},
        }
        store.dispatch(calculateTotalPriceOfPurchase(cartContent));
        const totalPriceOfPurchase = store.getState().totalPriceOfPurchaseReducer.totalPriceOfPurchase;
        expect(totalPriceOfPurchase).toBe(25);
    })
    it('case with 0 elements',()=>{
        const cartContent = {};
        store.dispatch(calculateTotalPriceOfPurchase(cartContent));
        const totalPriceOfPurchase = store.getState().totalPriceOfPurchaseReducer.totalPriceOfPurchase;
        expect(totalPriceOfPurchase).toBe(0);
    })
})