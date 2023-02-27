import './Page.css';
import { useNavigate, useParams } from 'react-router-dom';
import { handlePageButtonCliked } from './pagingFunctionalities';
function Page({pageNumber, startingPageNumberBtn}){
    const navigate = useNavigate();
    const params= useParams();
    const currentPage = Number(params.page);
    const endingVisiblePageNumber = startingPageNumberBtn + 4;
    const displayClass = (pageNumber > endingVisiblePageNumber || pageNumber < startingPageNumberBtn)?' noDisplay':'';
    const activeClass = (pageNumber === currentPage)?' pageActive':'';
    return(
        <div title='pageDiv' className={"pageDiv" + displayClass + activeClass} onClick={()=>{if(currentPage!==pageNumber){handlePageButtonCliked(navigate, pageNumber)}}}>
            <h4 className="pageNumber" >{pageNumber}</h4>
        </div>
    );    
}
export default Page;