import store from "../../app/store";
import { changeSearchInputText } from "./searchInputTextSlice";
import { changeSearchTextURL } from "../urlFetch/urlPartsSlice";

test('check correct slice initialization',()=>{
    const searchInputText = store.getState().searchInputTextReducer.inputText;
    expect(searchInputText).toBe('');
})
test('correct slice action behavior', ()=>{
    store.dispatch(changeSearchInputText('test'));
    const searchInputText = store.getState().searchInputTextReducer.inputText;
    expect(searchInputText).toBe('test');
})
test('check searchTextURL modification', ()=>{
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    store.dispatch(changeSearchInputText('test'));
    store.dispatch(changeSearchTextURL('test'));
    let searchTextURL = store.getState().urlPartsReducer.searchTextURL;
    expect(searchTextURL).toBe('&q=test');
    store.dispatch(changeSearchInputText(''));
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1);
    searchTextURL = store.getState().urlPartsReducer.searchTextURL;
    expect(searchTextURL).toBe('&q=');
})
