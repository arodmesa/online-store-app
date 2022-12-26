import './style/colores.css';
import {useParams} from 'react-router';
function Colores({color, index, cambiarActivo, checked_color}){
    const params= useParams();
    return(
        <span className={`colores ${color}`} onClick={()=>cambiarActivo('color', index, params.page)}><i className={(checked_color)?"fa fa-check":''}></i></span>
    );
}
export default Colores