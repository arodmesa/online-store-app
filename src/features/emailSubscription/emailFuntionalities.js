import store from "../../app/store";
import { changeUserEmailAddress } from "./userEmailAddressSlice";
import { switchEnableButtonState } from "./enableSubscribeButtonSlice";
import { displayNotification } from "../notificationBar/notificationFunctionalities";
function sendSubscriptionEmail() {
    const userEmailAddress = store.getState().userEmailAddressReducer.userEmailAddress;
    window.Email.send({
      SecureToken: "be618017-4606-4c16-925b-474c0be7185b",
      To: userEmailAddress,
      From: "testOnlineStoreReact@gmail.com",
      Subject: "Thanks for subscribing!!!",
      Body: "Thanks for subcribing ❤️. You will receive news ✉️ from us soon...",
    })
    .then(function (message) {
      displayNotification("Thanks for subscribing. If you dont receive our mail check your spam inbox", 3000);  
    });
}
function enableSubscribeButton(event){
  store.dispatch(switchEnableButtonState(event.target.checkValidity(event.target.value)));
  store.dispatch(changeUserEmailAddress(event.target.value));
}

export {sendSubscriptionEmail, enableSubscribeButton};