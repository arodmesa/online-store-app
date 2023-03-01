import store from "../../app/store";
import { enableSubscribeButton } from "./emailFuntionalities";
import { changeUserEmailAddress } from "./userEmailAddressSlice";
import { switchEnableButtonState } from "./enableSubscribeButtonSlice";

const event = {
    target:{
        checkValidity: (value)=>value === 'enable',
        value: 'disable'
    }
}

test('should set isButtonEnabled to true and pass the value of event.target.value to userEmailAddress slice',()=>{
    store.dispatch(changeUserEmailAddress(''));
    store.dispatch(switchEnableButtonState(false));
    event.target.value = 'enable';
    enableSubscribeButton(event);
    const isButtonEnabled = store.getState().enableSubscribeButtonReducer.isButtonEnabled;
    const userEmailAddress = store.getState().userEmailAddressReducer.userEmailAddress;
    expect(isButtonEnabled).toBe(true);
    expect(userEmailAddress).toBe(event.target.value);
})
test('should set isButtonEnabled to false and pass the value of event.target.value to userEmailAddress slice',()=>{
    store.dispatch(changeUserEmailAddress(''));
    store.dispatch(switchEnableButtonState(true));
    event.target.value = 'disable';
    enableSubscribeButton(event);
    const isButtonEnabled = store.getState().enableSubscribeButtonReducer.isButtonEnabled;
    const userEmailAddress = store.getState().userEmailAddressReducer.userEmailAddress;
    expect(isButtonEnabled).toBe(false);
    expect(userEmailAddress).toBe(event.target.value);
})