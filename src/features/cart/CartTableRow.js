import './CartTableRow.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removePortraitFromCart, incrementAmountOfOnePortraitInCart, decrementAmountOfOnePortraitInCart } from './portraitsInCartSlice';

function CartTableRow({portraitID, price, image, name, amount, subtotal}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(
        <>
            <div className='cartElementDiv'>
                <div className='divColumn organizeImageSection'>
                    <img className='imageCart' src={image} alt='product' onClick={()=>{navigate(`/product/ID/${portraitID}`)}}></img>              
                </div>
                <div className='organizeComponents'>
                    <div className='detailsDivision'>
                        <h4 className='detailsText imageTags'>{name}</h4>
                        <h4 className='detailsText price'> {`$${price}`}</h4>
                        <h4 className='detailsText subtotal'>{`subtotal: $${subtotal}`}</h4>
                    </div>
                    <div className='organizeAmount'>
                        <i className="fa fa-minus signo signsCart" onClick={()=>dispatch(decrementAmountOfOnePortraitInCart(portraitID))}></i>
                        <h4 className='amount'>{amount}</h4>
                        <i className="fa fa-plus signo signsCart" onClick={()=>dispatch(incrementAmountOfOnePortraitInCart(portraitID))} ></i>
                        <i className="fa fa-trash-o" onClick={()=>dispatch(removePortraitFromCart(portraitID))}></i>
                    </div>  
                </div>
            </div>    
            <hr className='divisionLine'></hr>
        </>
    );
}
export default CartTableRow;