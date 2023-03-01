import './PortraitDetailsPage.css';
import Animation from '../componentes/Animation';
import BackgroundForNavBar from '../features/backgroundForNavBar/BackgroundForNavBar';
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
       <>
            <BackgroundForNavBar />
            <div className="divDetailsPage">
                <div className='divColumn'>
                    <img className='imageDetails' src={portraitDetails.webformatURL} alt='imagen product'></img>
                    <div className='organizeTags'>
                            <h1 className='detailsTags'>{portraitDetails.tags}</h1>
                            <h1 className='detailsTags'>{`$${portraitDetails.webformatHeight}`}</h1>
                    </div>
                </div>
                <div className='organizeContent'>
                    <div className='organizeDetails'>                     
                        <h4 className='details'>{`${portraitDetails.likes} likes`}</h4>
                        <h4 className='details'>{`${portraitDetails.comments} comments`}</h4>
                        <h4 className='details'>{`${portraitDetails.downloads} purchases`}</h4>
                        <h4 className='details'>Available: <i>In stock</i></h4>
                        <h4 className='details'>Author: <i>{portraitDetails.user}</i></h4>
                    </div>                
                    <div className='divColumn'>
                        <div className='alignAmountComponents'>
                            <i className="fa fa-minus signs" onClick={()=>dispatch(decrementDefaultAmount())}></i>
                            <h3 className='amount'>{defaultAmountOfPortraitsToAddCart}</h3>
                            <i className="fa fa-plus signs" onClick={()=>dispatch(incrementDefaultAmount())}></i>
                        </div>
                        <button className='addCart' type='button' onClick={()=>dispatch(addPortraitToCart({portraitDetails, defaultAmountOfPortraitsToAddCart}))}>Add to cart</button>
                    </div>      
                </div>
            </div>
       </>
    );
}
export default PortraitDetailsPage;