import store from "../../app/store";
import { changeAmountOfResultsPages } from "./amountOfResultsPagesSlice";

test('correct slice initialization', ()=>{
    const amountOfResultsPages = store.getState().amountOfResultsPagesReducer.amountOfResultsPages;
    expect(amountOfResultsPages).toBe(1);
})
test('slice action correct behavior',()=>{
    store.dispatch(changeAmountOfResultsPages(21))
    const amountOfResultsPages = store.getState().amountOfResultsPagesReducer.amountOfResultsPages;
    expect(amountOfResultsPages).toBe(21);
})