import { fetchAndChangePortraitDetails } from "./portraitDetailsFunctionalities";
import store from "../../app/store";

const mockedUsedNavigate = jest.fn();
describe("cases of uses of the function",()=>{
    const portraitID = 7805400; 
    it("correct redirection when is not a valid portraitID and there is not a previous value on state",()=>{   
        const fakePortraitID = 78054005;  
        return fetchAndChangePortraitDetails(mockedUsedNavigate, fakePortraitID).then( ()=> {
            const portraitData = store.getState().portraitDetailsReducer.portraitDetails;
            expect(portraitData.id).toBe(undefined);
            expect(mockedUsedNavigate).toBeCalledTimes(1);
        });
    })
    it("correct data adquisition with a valid portraitID",()=>{  
        return fetchAndChangePortraitDetails(mockedUsedNavigate, portraitID).then( ()=> {
            const portraitData = store.getState().portraitDetailsReducer.portraitDetails;
            expect(portraitData.id).toBe(portraitID);
            expect(mockedUsedNavigate).toBeCalledTimes(0);
        });
    })
    it("correct redirection when is not a valid portraitID but there is a previous value on state",()=>{
        const fakePortraitID = 78054005;   
        return fetchAndChangePortraitDetails(mockedUsedNavigate, fakePortraitID).then( ()=> {
            const portraitData = store.getState().portraitDetailsReducer.portraitDetails;
            expect(portraitData.id).toBe(portraitID);
            expect(mockedUsedNavigate).toBeCalledTimes(1);
        });
    })
})
