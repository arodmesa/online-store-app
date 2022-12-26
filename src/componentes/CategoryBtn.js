import './style/categorybtn.css';
import {useParams} from 'react-router';
function CategoryBtn({nombre, index, cambiarActivo, checked_cat}){
    const params= useParams();
    return(
        <h4 className={(checked_cat)?'h4_category checked':'h4_category'} onClick={()=>cambiarActivo(nombre, index, params.page)}>{nombre}</h4>
    )
}
export default CategoryBtn;