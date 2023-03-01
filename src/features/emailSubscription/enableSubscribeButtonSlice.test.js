import store from "../../app/store";
import { switchEnableButtonState } from "./enableSubscribeButtonSlice";

test('check correct slice initialization',()=>{
    const isButtonEnabled = store.getState().enableSubscribeButtonReducer.isButtonEnabled;
    expect(isButtonEnabled).toBe(false);
})
test('check slice action behavior',()=>{
    store.dispatch(switchEnableButtonState(true));
    const isButtonEnabled = store.getState().enableSubscribeButtonReducer.isButtonEnabled;
    expect(isButtonEnabled).toBe(true);
})