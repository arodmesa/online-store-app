import store from "../../app/store";
import { displayNotification } from "./notificationFunctionalities";

test('displayNotification change the notificationText of the slice and then reset the state ("") after 3000ms',()=>{
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    const textToDisplay = 'test';
    const notificationDisplayTime = 3000;
    displayNotification(textToDisplay, notificationDisplayTime);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), notificationDisplayTime);
    let notificationText = store.getState().notificationTextReducer.notificationText; 
    expect(notificationText).toBe('test');
    jest.advanceTimersByTime(notificationDisplayTime);
    notificationText = store.getState().notificationTextReducer.notificationText; 
    expect(notificationText).toBe('');
})