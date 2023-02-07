import store from "../../app/store";
import { clearShoppingCart } from './portraitsInCartSlice';
import { displayNotification } from "../notificationBar/notificationFunctionalities";
function pay(){
    displayNotification('Thanks for purchasing!!!', 2000);
    store.dispatch(clearShoppingCart());
}
export {pay};