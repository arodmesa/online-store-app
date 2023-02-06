import './PageNotFound.css';
import {useNavigate} from 'react-router-dom';

function ErrorPage(){
    const navigate=useNavigate();
    return(
        <div className="div_notFound">
            <img className='img_notFound' src='https://img.freepik.com/foto-gratis/persona-3d-senal-trafico-error-sobre-fondo-blanco_476612-6101.jpg' alt='Error'></img>
            <button type='button' className='btn_home' onClick={()=>navigate('/', {replace:true})}>Go back Home</button>
        </div>        
    );
}
export default ErrorPage;