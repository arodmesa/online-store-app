import './PageNotFound.css';
import BackgroundForNavBar from '../features/backgroundForNavBar/BackgroundForNavBar';
import {useNavigate} from 'react-router-dom';
function PageNotFound(){
    const navigate=useNavigate();
    return(
        <>
            <BackgroundForNavBar />
            <div className="notFoundDiv">
                <div className='notFoundImageDiv'></div>
                <div className='paddingNotFound'></div>
                <button type='button' className='goHomeBtn' onClick={()=>navigate('/', {replace:true})}>Go back</button>
            </div>  
        </>   
    );
}
export default PageNotFound;