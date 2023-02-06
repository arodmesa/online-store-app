import './CategoryButtons.css';
import { useParams, useNavigate } from 'react-router';
import { useSelector} from 'react-redux';
import { navigateToPageOne } from '../../commonFunctions';
import { changeActiveCategoryAndUrlCategory } from '../../commonFunctions';

function CategoryButtons({categoryName}){
    const params= useParams();
    const activeCategoryName = useSelector((state)=>state.activeCategoryReducer.category);
    const navigate = useNavigate();
  
    return(
        <h4 className={(categoryName === activeCategoryName)?'h4_category checked':'h4_category'} onClick={()=>{changeActiveCategoryAndUrlCategory(categoryName); navigateToPageOne(navigate, params.page)}}>{categoryName}</h4>
    )
}
export default CategoryButtons;