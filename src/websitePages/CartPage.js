import './CartPage.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearShoppingCart } from '../features/cart/portraitsInCartSlice';
import CartTableRow from '../features/cart/CartTableRow';
import { pay } from '../features/cart/cartFunctionalities';

function CartPage(){
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const portraitsInCart = useSelector((state)=>state.portraitsInCartReducer.portraitsInCart);
    const totalPrice = useSelector((state)=>state.totalPriceOfPurchaseReducer.totalPriceOfPurchase);
    const amountOfUniquePortraitsInCart = useSelector((state)=>state.amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart);
    const cartTable = [];
    for (const portraitID in portraitsInCart){
        cartTable.push(
            <CartTableRow key = {portraitID} portraitID={portraitID} price={portraitsInCart[portraitID].price} 
                          image={portraitsInCart[portraitID].image} name={portraitsInCart[portraitID].name} 
                          amount={portraitsInCart[portraitID].amount} subtotal={portraitsInCart[portraitID].subtotal} 
            />
        )
    }
    if (amountOfUniquePortraitsInCart){
        return(
        <div className="div_cart">
            <table className='tabla_cart'>
                <tbody>
                    <tr className='head_row'>
                        <th className='th_head'>Item</th>
                        <th className='th_head'>Price</th>
                        <th className='th_head'>Quantity</th>
                        <th className='th_head'>Subtotal</th>
                    </tr>
                    {cartTable}
                </tbody>
            </table>
            <div className='org_btn'>
                <button className='btn_home cart_btn' type='button' onClick={()=>navigate('/products/pageNum/1')}>Continue Shopping</button>
                <button className='btn_home cart_btn' type='button' onClick={()=>dispatch(clearShoppingCart())} >Clear Shopping Cart</button>
            </div>
            <div className='div_pagar'>
                <h1>{`Order total: $${totalPrice}`}</h1>
                <button className='btn_home payBtn' onClick={pay}>Pay</button>
            </div>
        </div>
        )
    }
    return(
        <div className="div_cart_empty">
            <img className='empty_cart_img' src='https://www.valeorx.com/static/media/empty-cart.60e68bfd.png' alt='cart empty'></img>
            <button className='btn_home fill' type='button' onClick={()=>navigate('/products/pageNum/1')}>Fill it</button>
        </div>
    );
}
export default CartPage;