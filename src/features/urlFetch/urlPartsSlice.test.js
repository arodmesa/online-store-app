import store from "../../app/store";
import { beginingUrlPartCategory, beginingUrlPartColor, beginingUrlPartSearchText, beginingUrlPartPage } from "../../constants";
import {changeCategoryURL, changeColorURL, changeSearchTextURL, changePageURL} from "./urlPartsSlice";

const storeState = store.getState().urlPartsReducer;

describe('check correct urlPartsSliceInitialization',()=>{
    it('checking correct categoryURL initialization', ()=>{
        expect(storeState.categoryURL).toBe(beginingUrlPartCategory + 'all');
    });
    it('checking correct colorURL initialization', ()=>{
        expect(storeState.colorURL).toBe(beginingUrlPartColor + 'all');
    });
    it('checking correct searchTextURL initialization', ()=>{
        expect(storeState.searchTextURL).toBe(beginingUrlPartSearchText);
    });
    it('checking correct pageURL initialization', ()=>{
        expect(storeState.pageURL).toBe(beginingUrlPartPage + '1');
    });
})
describe('check correct actualization of the state slice',()=>{
    store.dispatch(changeCategoryURL('nature'));
    store.dispatch(changeColorURL('red'));
    store.dispatch(changeSearchTextURL('woman'));
    store.dispatch(changePageURL('10'));
    const newStoreState = store.getState().urlPartsReducer;
    it('checking correct categoryURL modification',()=>{
        expect(newStoreState.categoryURL).toBe(beginingUrlPartCategory + 'nature')
    });
    it('checking correct colorURL modification',()=>{
        expect(newStoreState.colorURL).toBe(beginingUrlPartColor + 'red')
    });
    it('checking correct searchTextURL modification',()=>{
        expect(newStoreState.searchTextURL).toBe(beginingUrlPartSearchText + 'woman')
    });
    it('checking correct pageURL modification',()=>{
        expect(newStoreState.pageURL).toBe(beginingUrlPartPage + '10')
    });
})