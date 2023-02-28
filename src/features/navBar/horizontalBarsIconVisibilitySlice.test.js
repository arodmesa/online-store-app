import store from "../../app/store";
import { changeHorizontalBarsIconVisibility } from "./horizontalBarsIconVisibilitySlice";

test('correct slice initialization',()=>{
    const isHorizontalBarsIconVisible = store.getState().horizontalBarsIconVisibilityReducer.isHorizontalBarsIconVisible;
    expect(isHorizontalBarsIconVisible).toBe(true);
})
test('correct behavior slice action', ()=>{
    store.dispatch(changeHorizontalBarsIconVisibility(false));
    const isHorizontalBarsIconVisible = store.getState().horizontalBarsIconVisibilityReducer.isHorizontalBarsIconVisible;
    expect(isHorizontalBarsIconVisible).toBe(false);
})