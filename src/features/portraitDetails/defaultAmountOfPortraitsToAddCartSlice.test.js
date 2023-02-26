import store from "../../app/store";
import { incrementDefaultAmount, decrementDefaultAmount, resetDefaultAmount } from "./defaultAmountOfPortraitsToAddCartSlice";

function modifySliceState(instructions){
    const {numberOfTimesIncrementState, numberOfTimesDecrementState} = instructions;
    for(let i = 0; i < numberOfTimesIncrementState; i++){
        store.dispatch(incrementDefaultAmount());
    }
    for(let i = 0; i < numberOfTimesDecrementState; i++){
        store.dispatch(decrementDefaultAmount());
    }
}
test("check correct inittialization of the slice",()=>{
    const defaultAmountOfPortraits = store.getState().defaultAmountOfPortraitsToAddCartReducer.defaultAmountOfPortraits;
    expect(defaultAmountOfPortraits).toBe(1);
});
describe("check slice actions",()=>{
    it("check if the increment was correct",()=>{
        modifySliceState({numberOfTimesIncrementState:4})
        const defaultAmountOfPortraits = store.getState().defaultAmountOfPortraitsToAddCartReducer.defaultAmountOfPortraits;
        expect(defaultAmountOfPortraits).toBe(5);
    });
    store.dispatch(decrementDefaultAmount());
    it("check if the decrement was correct",()=>{
        modifySliceState({numberOfTimesDecrementState: 1})
        const defaultAmountOfPortraits = store.getState().defaultAmountOfPortraitsToAddCartReducer.defaultAmountOfPortraits;
        expect(defaultAmountOfPortraits).toBe(4);
    });
    store.dispatch(resetDefaultAmount());
    it("check if reset works",()=>{     
        store.dispatch(resetDefaultAmount());
        const defaultAmountOfPortraits = store.getState().defaultAmountOfPortraitsToAddCartReducer.defaultAmountOfPortraits;
        expect(defaultAmountOfPortraits).toBe(1);
    })
    it("check that minimum defaultAmountOfPortraits is 1",()=>{
        modifySliceState({numberOfTimesIncrementState: 10, numberOfTimesDecrementState: 18})
        const defaultAmountOfPortraits = store.getState().defaultAmountOfPortraitsToAddCartReducer.defaultAmountOfPortraits;
        expect(defaultAmountOfPortraits).toBe(1);
    })
})