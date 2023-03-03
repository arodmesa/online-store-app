import store from "../../app/store";
import { incrementAmountOfUniquePortraitsInCart, decrementAmountOfUniquePortraitsInCart, resetAmountOfUniquePortraitsInCart } from "./amountOfUniquePortraitsInCartSlice";

test('check correct initialization of the slice', ()=>{
    const amountOfUniquePortraitsInCart = store.getState().amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart;
    expect(amountOfUniquePortraitsInCart).toBe(0);
})
describe('check correct behavior of slice actions',()=>{
    it('check increment (+1) and decrement (-1) amount functions', ()=>{
        store.dispatch(incrementAmountOfUniquePortraitsInCart());
        store.dispatch(incrementAmountOfUniquePortraitsInCart());
        store.dispatch(incrementAmountOfUniquePortraitsInCart());
        let amountOfUniquePortraitsInCart = store.getState().amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart;
        expect(amountOfUniquePortraitsInCart).toBe(3);
        store.dispatch(decrementAmountOfUniquePortraitsInCart());
        store.dispatch(decrementAmountOfUniquePortraitsInCart());
        amountOfUniquePortraitsInCart = store.getState().amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart;
        expect(amountOfUniquePortraitsInCart).toBe(1)
        store.dispatch(decrementAmountOfUniquePortraitsInCart());
        store.dispatch(decrementAmountOfUniquePortraitsInCart());
        amountOfUniquePortraitsInCart = store.getState().amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart;
        expect(amountOfUniquePortraitsInCart).toBe(0)
    })
    it('check reset function that should set the slice to 0',()=>{
        store.dispatch(incrementAmountOfUniquePortraitsInCart());
        store.dispatch(incrementAmountOfUniquePortraitsInCart());
        store.dispatch(incrementAmountOfUniquePortraitsInCart());
        store.dispatch(resetAmountOfUniquePortraitsInCart());
        const amountOfUniquePortraitsInCart = store.getState().amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart;
        expect(amountOfUniquePortraitsInCart).toBe(0);
    })
})