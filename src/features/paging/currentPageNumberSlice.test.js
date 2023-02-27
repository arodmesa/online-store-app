import store from "../../app/store";
import { changeCurrentPageNumber } from "./currentPageNumberSlice";

test('check correct slice initialization', ()=>{
    const currentPageNumber = store.getState().currentPageNumberReducer.currentPageNumber;
    expect(currentPageNumber).toBe(0);
})
test('slice action correct behavior', ()=>{
    store.dispatch(changeCurrentPageNumber(10));
    const currentPageNumber = store.getState().currentPageNumberReducer.currentPageNumber;
    expect(currentPageNumber).toBe(10);
})