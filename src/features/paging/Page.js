import './Page.css';
import { useNavigate } from 'react-router-dom';
import { handlePageButtonCliked } from './pagingFunctionalities';
function Page({pageNumber}){
    const navigate = useNavigate();
    return(
        <div className="pag" onClick={()=>handlePageButtonCliked(navigate, pageNumber)}>
            <h4 className="h4_pag" >{pageNumber}</h4>
        </div>
    );    
}
export default Page;