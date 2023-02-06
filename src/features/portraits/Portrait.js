import './Portrait.css';
import { useNavigate } from 'react-router-dom';
import { controlPortraitsLoadingProcess } from './portraitsFunctionalities';
import { fetchAndChangePortraitDetails } from '../portraitDetails/portraitDetailsFunctionalities';
function Portrait({portraitID, price, tags, imagePreview, imgClassName}){
    const navigate=useNavigate();
    return(
        <div className="div_product">
            <div className="div_img_prod">
                <img className={'img_preview '+ imgClassName} src={imagePreview} alt='product' onLoad={controlPortraitsLoadingProcess} onClick={()=>{fetchAndChangePortraitDetails(navigate, portraitID); navigate(`/product/ID/${portraitID}`)}}></img>
                <div className="eyes_div" onClick={()=>{fetchAndChangePortraitDetails(navigate, portraitID); navigate(`/product/ID/${portraitID}`)}}>
                    <i className="fa fa-eye"></i>
                    <i className="fa fa-eye"></i>
                </div>                
            </div>            
            <div className='org_h4'>
                <h4 className='h4_products'>{tags}</h4>
                <h4 className='h4_products'>{`$${price}`}</h4>
            </div>
        </div>
    );
}
Portrait.defaultProps={
    imgClassName: ''
}
export default Portrait;