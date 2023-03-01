import store from "../../app/store";
import { changeActiveCategory } from "./activeCategorySlice";

test('slice correct initialization',()=>{
    const activeCategory = store.getState().activeCategoryReducer.category;
    expect(activeCategory).toBe('all');
})
test('slice action correct behavior',()=>{
    store.dispatch(changeActiveCategory('nature'));
    const activeCategory = store.getState().activeCategoryReducer.category;
    expect(activeCategory).toBe('nature');
})