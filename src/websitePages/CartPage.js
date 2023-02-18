import './CartPage.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearShoppingCart } from '../features/cart/portraitsInCartSlice';
import CartTableRow from '../features/cart/CartTableRow';
import BackgroundForNavBar from '../features/backgroundForNavBar/BackgroundForNavBar';
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
            <>
                <BackgroundForNavBar />
                <div className="divCart">
                    <h1 className='cartPageTitle'>Your Cart</h1>
                    {cartTable}
                    <div className='divRow organizeCartBtn'>
                        <button className='btnCart' type='button' onClick={()=>navigate('/products/pageNum/1')}>Continue Shopping</button>
                        <button className='btnCart' type='button' onClick={()=>dispatch(clearShoppingCart())} >Clear Shopping Cart</button>
                    </div>
                    <div className='organizePaymentSection'>
                        <h1 className='total'>{`Total: $${totalPrice}`}</h1>
                        <button className='payBtn' onClick={pay}>Pay</button>
                    </div>
                </div>
            </>        
        )
    }
    return(
        <>
            <BackgroundForNavBar />
            <div className="divCartEmpty"></div>
            <div className='divFillBtn'>
                <button className='btnCart fillItBtn' type='button' onClick={()=>navigate('/products/pageNum/1')}>Fill it</button>
            </div>
        </>
    );
}
export default CartPage;