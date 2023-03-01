import './ColorButtons.css';
import {useParams, useNavigate} from 'react-router';
import { useSelector } from 'react-redux';
import { navigateToPageOne } from '../../commonFunctions';
import { changeActiveColorAndUrlColor } from '../../commonFunctions';
function ColorButtons({colorName, minimizeLateralBar}){
    const params= useParams();
    const navigate = useNavigate();
    const activeColor = useSelector((state)=>state.activeColorReducer.color);   
    return(
        <span title='colorSpan' className={`colors ${colorName}`} onClick={()=>{changeActiveColorAndUrlColor(colorName); navigateToPageOne(navigate, params.page); minimizeLateralBar()}}>
            <i title='checkedIcon' className={(colorName === activeColor)?"fa fa-check":''}></i>
        </span>
    );
}
export default ColorButtons