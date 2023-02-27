import store from "../../app/store";
import { changeNotificationText } from "./notificationTextSlice";

test('check correct slice initialization', ()=>{
    const notificationText = store.getState().notificationTextReducer.notificationText;
    expect(notificationText).toBe('');
})
test('correct behavior of slice actions',()=>{
    store.dispatch(changeNotificationText('test'));
    const notificationText = store.getState().notificationTextReducer.notificationText;
    expect(notificationText).toBe('test');
})
