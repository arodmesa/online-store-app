import store from "../../app/store";
import { changePortraitDetails } from "./portraitDetailsSlice";

it("check correct initialization of Slice",()=>{
    const portraitDetails = store.getState().portraitDetailsReducer.portraitDetails;
    expect(portraitDetails).toEqual({});
})
it("check Slice action for changeing the state",()=>{
    store.dispatch(changePortraitDetails({test: 'correct'}));
    const portraitDetails = store.getState().portraitDetailsReducer.portraitDetails;
    expect(portraitDetails).toEqual({test: 'correct'});
})
