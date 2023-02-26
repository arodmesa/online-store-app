import getPortraitData from "./getPortraitData";

test("correct data adquisition with a valid portraitID",()=>{
    const portraitID = 7805400;   
    return getPortraitData(portraitID).then(portraitData => {
        expect(portraitData.id).toBe(portraitID);
    });
})
test("throwing error when introducing a no valid portraitID",()=>{
    const portraitID = 78054005;   
    return getPortraitData(portraitID).then(portraitData => {
        expect(portraitData.id).toBe(undefined);
        expect(portraitData.customError).toBe('Error');
    });
})