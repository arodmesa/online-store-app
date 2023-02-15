import './CategoryButtons.css';
import { useParams, useNavigate } from 'react-router';
import { useSelector} from 'react-redux';
import { navigateToPageOne } from '../../commonFunctions';
import { changeActiveCategoryAndUrlCategory } from '../../commonFunctions';

function CategoryButtons({categoryName, minimizeLateralBar}){
    const params= useParams();
    const activeCategoryName = useSelector((state)=>state.activeCategoryReducer.category);
    const navigate = useNavigate();
  
    return(
        <h4 className={(categoryName === activeCategoryName)?'category checked':'category'} onClick={()=>{changeActiveCategoryAndUrlCategory(categoryName); navigateToPageOne(navigate, params.page); minimizeLateralBar(true)}}>{categoryName}</h4>
    )
}
export default CategoryButtons;