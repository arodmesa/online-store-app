import './Portrait.css';
import { useNavigate } from 'react-router-dom';
import { controlPortraitsLoadingProcess } from './portraitsFunctionalities';
function Portrait({portraitID, price, tags, imagePreview}){
    const navigate=useNavigate();
    return(
        <div className="divPortrait">
            <img className='imgPreview' src={imagePreview} alt='product' onLoad={controlPortraitsLoadingProcess} onClick={()=>{navigate(`/product/ID/${portraitID}`)}}></img>            
            <div className='organizePortraitTags'>
                <h4 className='portraitTags'>{tags}</h4>
                <h4 className='portraitPrice'>{`$${price}`}</h4>
            </div>
        </div>
    );
}

export default Portrait;