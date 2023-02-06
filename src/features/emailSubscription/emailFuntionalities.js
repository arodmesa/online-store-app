import store from "../../app/store";
import { changeUserEmailAddress } from "./userEmailAddressSlice";
import { switchEnableButtonState } from "./enableSubscribeButtonSlice";
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
        alert("mail sent successfully")
        /////////////////////////////////
        // DISPLAY NOTIFICATION //
        ////////////////////////////////
    });
}
function enableSubscribeButton(event){
  store.dispatch(switchEnableButtonState(event.target.checkValidity(event.target.value)));
  store.dispatch(changeUserEmailAddress(event.target.value));
}

export {sendSubscriptionEmail, enableSubscribeButton};