//componentesCarrito tendra una lista de los componentes de tipo ElementoCarrito a usar
import './style/cart.css';
import {useNavigate} from 'react-router-dom';

function Cart({precioTotal, componentesCarrito, clearShoppingCart, pay}){
    const navigate= useNavigate();
    if (componentesCarrito.length!==0){
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
                    {componentesCarrito}
                </tbody>
            </table>
            <div className='org_btn'>
                <button className='btn_home cart_btn' type='button' onClick={()=>navigate('/products/pageNum/1')}>Continue Shopping</button>
                <button className='btn_home cart_btn' type='button' onClick={clearShoppingCart} >Clear Shopping Cart</button>
            </div>
            <div className='div_pagar'>
                <h1>{`Order total: $${precioTotal}`}</h1>
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
export default Cart;