import store from "../../app/store";
import { changeActiveColor } from "./activeColorSlice";

test('slice correct initialization',()=>{
    const activeColor = store.getState().activeColorReducer.color;
    expect(activeColor).toBe('all')
})
test('slice action correct behavior',()=>{
    store.dispatch(changeActiveColor('red'))
    const activeColor = store.getState().activeColorReducer.color;
    expect(activeColor).toBe('red')
})
