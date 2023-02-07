import store from "../../app/store";
import { changeNotificationText } from "./notificationTextSlice";

function displayNotification(textToDisplay){
    store.dispatch(changeNotificationText(textToDisplay));
}
export {displayNotification};