import '../../websitePages/PortraitDetailsPage.css';
import './CartTableRow.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removePortraitFromCart, incrementAmountOfOnePortraitInCart, decrementAmountOfOnePortraitInCart } from './portraitsInCartSlice';

function CartTableRow({portraitID, price, image, name, amount, subtotal}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <>
            <tr>
                <th>
                    <div className='org_imgCart'>
                        <img className='img_cart' src={image} alt='product' onClick={()=>{navigate(`/product/ID/${portraitID}`)}}></img>
                        <h4 className='h4_cart'>{name}</h4>
                    </div>
                </th>
                <th>
                    <h4 className='h4_dinero'> {`$${price}`}</h4>                   
                </th>
                <th>
                    <div className='cantProd'>
                    <h3 className='h3_cant h3_details'> 
                        <i className="fa fa-minus signo cant" onClick={()=>dispatch(decrementAmountOfOnePortraitInCart(portraitID))}></i>
                        {amount}
                        <i className="fa fa-plus signo cant" onClick={()=>dispatch(incrementAmountOfOnePortraitInCart(portraitID))} ></i>
                    </h3>
                    </div>
                </th>
                <th>
                    <h4 className='h4_dinero'>{`$${subtotal}`}</h4>
                </th>
                <th><i className="fa fa-trash-o" onClick={()=>dispatch(removePortraitFromCart(portraitID))}></i></th>
            </tr>
        </>
    );
}
export default CartTableRow;