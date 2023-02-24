import store from "../../app/store";
import { changeAmountOfLoadedPortraits } from "./amountOfLoadedPortraitsSlice";

test('check correct Slice initialization', ()=>{
    const amountOfLoadedPortraits = store.getState().amountOfLoadedPortraitsReducer.amountOfLoadedPortraits;
    expect(amountOfLoadedPortraits).toBe(1);
})
test('check correct actualization of the state slice', ()=>{
    store.dispatch(changeAmountOfLoadedPortraits(5));
    const newAmountOfLoadedPortraits = store.getState().amountOfLoadedPortraitsReducer.amountOfLoadedPortraits;
    expect(newAmountOfLoadedPortraits).toBe(5);
})