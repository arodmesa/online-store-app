import './ErrorPage.css';
import BackgroundForNavBar from '../features/backgroundForNavBar/BackgroundForNavBar';
import {useNavigate} from 'react-router-dom';

function ErrorPage(){
    const navigate=useNavigate();
    return(
        <>
            <BackgroundForNavBar />
            <div className="errorDiv">
                <div className='errorImageDiv'></div>
                <div className='paddingError'></div>
                <button type='button' className='goHomeBtn' onClick={()=>navigate('/', {replace:true})}>Go back</button>
            </div>  
        </>      
    );
}
export default ErrorPage;