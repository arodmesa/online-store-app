import store from "../../app/store";
import { changeAmountOfLoadedPortraits } from "./amountOfLoadedPortraitsSlice";
import { changePortraitsData } from "./portraitsDataSlice";
import { controlPortraitsLoadingProcess } from "./portraitsFunctionalities";
import { changeAreAllPortraitsLoaded } from "./areAllPortraitsLoadedSlice";

const fakeFetchedData = [{pic1: 'pic1'}, {pic2: 'pic2'}, {pic3: 'pic3'}] ;

describe("testing all types of scenarios for the function", ()=>{
    let areAllPortraitsLoaded, percentageOfLoadedPortraits, amountOfLoadedPortraits;
    let amountOfLoadedPortraitsForTest;
    function initializeScenarios(newAmount){
        amountOfLoadedPortraitsForTest = newAmount;
        //store.dispatch(changeAreAllPortraitsLoaded(false));
        store.dispatch(changeAmountOfLoadedPortraits(amountOfLoadedPortraitsForTest));
        store.dispatch(changePortraitsData(fakeFetchedData));
        controlPortraitsLoadingProcess();
        areAllPortraitsLoaded = store.getState().areAllPortraitsLoadedReducer.areLoaded;
        percentageOfLoadedPortraits = store.getState().percentageOfLoadedPortraitsReducer.percentage;
        amountOfLoadedPortraits = store.getState().amountOfLoadedPortraitsReducer.amountOfLoadedPortraits;
    }
    it("no portraits loaded yet scenatio", ()=>{
        initializeScenarios(0);
        expect(areAllPortraitsLoaded).toBe(false);
        expect(percentageOfLoadedPortraits).toBe(33);
        expect (amountOfLoadedPortraits).toBe(amountOfLoadedPortraitsForTest + 1);
    });;
    it("first portrait loaded",()=>{
        initializeScenarios(1);
        expect(areAllPortraitsLoaded).toBe(false);
        expect(percentageOfLoadedPortraits).toBe(66);
        expect (amountOfLoadedPortraits).toBe(amountOfLoadedPortraitsForTest + 1);
    });
    it("all portraits loaded but one",()=>{
        initializeScenarios(2);
        expect(percentageOfLoadedPortraits).toBe(100);
        expect(areAllPortraitsLoaded).toBe(true);        
        expect (amountOfLoadedPortraits).toBe(amountOfLoadedPortraitsForTest + 1);
    })
})