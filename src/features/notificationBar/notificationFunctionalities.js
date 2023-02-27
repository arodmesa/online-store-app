import store from "../../app/store";
import { changeNotificationText } from "./notificationTextSlice";

function displayNotification(textToDisplay, notificationDisplayTime){
    store.dispatch(changeNotificationText(textToDisplay));
    setTimeout(()=>{store.dispatch(changeNotificationText(''))}, notificationDisplayTime);
}
export {displayNotification};