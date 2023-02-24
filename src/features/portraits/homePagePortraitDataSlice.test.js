import store from "../../app/store";
import { changeHomePagePortraitData } from "./homePagePortraitDataSlice";

test('check correct Slice initialization', ()=>{
    const homePagePortraitData = store.getState().homePagePortraitDataReducer.homePagePortraitData;
    expect(homePagePortraitData).toEqual([]);
})
test('check correct actualization of the state slice', ()=>{
    store.dispatch(changeHomePagePortraitData(['test', 'test']));
    const newHomePagePortraitData = store.getState().homePagePortraitDataReducer.homePagePortraitData;
    expect(newHomePagePortraitData).toEqual(['test', 'test']);
})