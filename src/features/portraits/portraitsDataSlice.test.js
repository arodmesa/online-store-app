import store from "../../app/store";
import { changePortraitsData } from "./portraitsDataSlice";

test('check correct Slice initialization', ()=>{
    const portraitsData = store.getState().portraitsDataReducer.portraitsData;
    expect(portraitsData).toEqual([]);
})
test('check correct actualization of the state slice', ()=>{
    store.dispatch(changePortraitsData(['test', 'test']));
    const newPortraitsData = store.getState().portraitsDataReducer.portraitsData;
    expect(newPortraitsData).toEqual(['test', 'test']);
})