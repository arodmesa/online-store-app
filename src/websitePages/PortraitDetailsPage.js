import Animation from '../componentes/Animation';
import './PortraitDetailsPage.css';
import './HomePage.css';
import { fetchAndChangePortraitDetails } from '../features/portraitDetails/portraitDetailsFunctionalities';
import {useParams, useNavigate} from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { incrementDefaultAmount, decrementDefaultAmount } from '../features/portraitDetails/defaultAmountOfPortraitsToAddCartSlice';
import { addPortraitToCart} from '../features/cart/portraitsInCartSlice';
function PortraitDetailsPage(){
    const params= useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const defaultAmountOfPortraitsToAddCart = useSelector((state)=>state.defaultAmountOfPortraitsToAddCartReducer.defaultAmountOfPortraits);
    const portraitDetails = useSelector((state)=>state.portraitDetailsReducer.portraitDetails);
    if (String(portraitDetails.id) !== params.id){
        fetchAndChangePortraitDetails(navigate, params.id)
        return(<Animation/>);
    }
    return(
        <div className="div_details">
            <img className='img_detalles' src={portraitDetails.webformatURL} alt='imagen product'></img>
            <div className='org_detalles'>
                <div className='org_vMovil'>
                    <h1 className='h1_details'>{portraitDetails.tags}</h1>
                    <h1 className='h1_details'>{`$${portraitDetails.webformatHeight}`}</h1>
                    <h4 className='h4_details'>{`${portraitDetails.likes} likes`}</h4>
                    <h4 className='h4_details'>{`${portraitDetails.comments} comments`}</h4>
                    <h4 className='h4_details'>{`${portraitDetails.downloads} purchases`}</h4>
                    <h4 className='h4_details'>Available: <i>In stock</i></h4>
                    <h4 className='h4_details'>Author: <i>{portraitDetails.user}</i></h4>
                </div>                
                <div className='org_things'>
                    <div className='org_cant'>
                        <i className="fa fa-minus signo" onClick={()=>dispatch(decrementDefaultAmount())}></i>
                        <h3 className='h3_details'>{defaultAmountOfPortraitsToAddCart}</h3>
                        <i className="fa fa-plus signo" onClick={()=>dispatch(incrementDefaultAmount())}></i>
                    </div>
                    <button className='btn_home' type='button' onClick={()=>dispatch(addPortraitToCart({portraitDetails, defaultAmountOfPortraitsToAddCart}))}>Add to cart</button>
                </div>                
            </div>
        </div>
    );
}
export default PortraitDetailsPage;