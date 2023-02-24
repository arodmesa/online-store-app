import store from "../../app/store";
import { changeAmountOfPortraitsFinded } from "./amountOfPortraitsFindedSlice";

test('check correct Slice initialization', ()=>{
    const amountOfPortraitsFinded = store.getState().amountOfPortraitsFindedReducer.amountOfPortraitsFinded;
    expect(amountOfPortraitsFinded).toBe(0);
})
test('check correct actualization of the state slice', ()=>{
    store.dispatch(changeAmountOfPortraitsFinded(5));
    const newAmountOfPortraitsFinded = store.getState().amountOfPortraitsFindedReducer.amountOfPortraitsFinded;
    expect(newAmountOfPortraitsFinded).toBe(5);
})