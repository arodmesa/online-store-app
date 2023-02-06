import store from "../../app/store";
import { clearShoppingCart } from './portraitsInCartSlice';
function pay(){
    //////////////////////////////////
    // Cambiar esto por una notificacion
    alert('Thanks for purchasing!!!');
    //////////////////////////////////
    store.dispatch(clearShoppingCart());
}
export {pay};