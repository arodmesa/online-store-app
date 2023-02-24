import store from "../../app/store";
import { changePercentageOfLoadedPortraits } from "./percentageOfLoadedPortraitsSlice";

test('check correct Slice initialization', ()=>{
    const percentageOfLoadedPortraitsReducer = store.getState().percentageOfLoadedPortraitsReducer.percentage;
    expect(percentageOfLoadedPortraitsReducer).toEqual(0);
})
test('check correct actualization of the state slice when number is not infinity', ()=>{
    store.dispatch(changePercentageOfLoadedPortraits(45));
    const newPercentageOfLoadedPortraitsReducer = store.getState().percentageOfLoadedPortraitsReducer.percentage;
    expect(newPercentageOfLoadedPortraitsReducer).toEqual(45);
})
test('check correct actualization of the state slice when number is infinity', ()=>{
    store.dispatch(changePercentageOfLoadedPortraits(45));
    store.dispatch(changePercentageOfLoadedPortraits(Infinity));
    const newPercentageOfLoadedPortraitsReducer = store.getState().percentageOfLoadedPortraitsReducer.percentage;
    expect(newPercentageOfLoadedPortraitsReducer).toEqual(0);
})