import store from "../../app/store";
import { changeAreAllPortraitsLoaded } from "./areAllPortraitsLoadedSlice";

test('check correct Slice initialization', ()=>{
    const areAllPortraitsLoaded = store.getState().areAllPortraitsLoadedReducer.areLoaded;
    expect(areAllPortraitsLoaded).toBe(false);
})
test('check correct actualization of the state slice', ()=>{
    store.dispatch(changeAreAllPortraitsLoaded(true));
    const newStateAreAllPortraitsLoaded = store.getState().areAllPortraitsLoadedReducer.areLoaded;
    expect(newStateAreAllPortraitsLoaded).toBe(true);
})