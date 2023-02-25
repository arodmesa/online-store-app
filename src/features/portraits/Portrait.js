import './Portrait.css';
import { useNavigate } from 'react-router-dom';
import { controlPortraitsLoadingProcess } from './portraitsFunctionalities';
function Portrait({portraitID, price, tags, imagePreview, isResultsPage}){
    const navigate=useNavigate();
    const classImgResultsPage = (isResultsPage)?' imgResultsPage':'';
    const classTagsResultsPage = (isResultsPage)?' tagsResultsPage':'';
    return(
        <div className="divPortrait">
            <img className={'imgPreview'+classImgResultsPage} src={imagePreview} alt='product' onLoad={controlPortraitsLoadingProcess} onClick={()=>{navigate(`/product/ID/${portraitID}`)}}></img>            
            <div title='divContainerText' className={'organizePortraitTags'+classTagsResultsPage}>
                <h4 className='portraitTags'>{tags}</h4>
                <h4 className='portraitPrice'>{`$${price}`}</h4>
            </div>
        </div>
    );
}

export default Portrait;