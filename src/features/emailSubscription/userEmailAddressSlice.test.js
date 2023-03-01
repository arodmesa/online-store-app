import store from "../../app/store";
import { changeUserEmailAddress } from "./userEmailAddressSlice";

test('correct slice initialization',()=>{
    const userEmailAddress = store.getState().userEmailAddressReducer.userEmailAddress;
    expect(userEmailAddress).toBe('');
})
test('correct reducer action behavior',()=>{
    store.dispatch(changeUserEmailAddress('test'));
    const userEmailAddress = store.getState().userEmailAddressReducer.userEmailAddress;
    expect(userEmailAddress).toBe('test');
})