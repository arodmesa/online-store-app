import './PageNotFound.css';
import {useNavigate} from 'react-router-dom';
function PageNotFound(){
    const navigate=useNavigate();
    return(
        <div className="div_notFound">
            <img className='img_notFound' src='https://www.seekahost.com/wp-content/uploads/2017/11/404-page-not-found.jpg' alt='not found'></img>
            <button type='button' className='btn_home' onClick={()=>navigate('/', {replace:true})}>Go back Home</button>
        </div>        
    );
}
export default PageNotFound;