import {useNavigate, useParams} from 'react-router';
import './LateralSearchBar.css';
import CategoryButtons from "./CategoryButtons";
import ColorButtons from "./ColorButtons";
import { categories, colors } from '../../constants';
import { useSelector, useDispatch} from 'react-redux';
import { changeActiveColorAndUrlColor, navigateToPageOne, resetSearchFilters, resetLoadedPortraitsProcess, getData } from '../../commonFunctions';
import { changeSearchInputText } from './searchInputTextSlice';
import { changeSearchTextURL } from '../urlFetch/urlPartsSlice';

function LateralSearchBar(){
    const params= useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInputText = useSelector((state)=>state.searchInputTextReducer.inputText);
    const onlyColors = colors.slice(1);
    const activeColor = useSelector((state)=>state.activeColorReducer.color);
    const arrayOfCategoryBtnComponents  = categories.map((categoryName, index)=>{
        return(
            <CategoryButtons key={index} categoryName={categoryName} />
        );
    })
    const arrayOfColorsComponents = onlyColors.map((colorName,index)=>{
        return(
            <ColorButtons key={index} colorName={colorName} />
        )
    })
    function handleSearchButtonClick(pageNumber){
        resetLoadedPortraitsProcess();
        dispatch(changeSearchTextURL(searchInputText));
        if (pageNumber!=='1'){
          navigate('products/pageNum/1');
        }
        else{
          getData(navigate, 1);
        }       
    }
    return(
        <div className='div_search'>
            <div className='search_input'>
                <input type='text' className='search_entrada' placeholder='Search' value={searchInputText} onChange={(event)=>dispatch(changeSearchInputText(event.target.value))} 
                    onKeyDown={(event)=>{
                        if(event.key==='Enter'){handleSearchButtonClick(params.page)}
                    }}>
                </input>
                <i className='fa fa-search' onClick={()=>handleSearchButtonClick(params.page)}></i>
            </div>
            <div className='div_category'>
                <h3 className='h3_search'>Category</h3>
                <div className='org_cat'>
                    {arrayOfCategoryBtnComponents}
                </div>                
            </div>
            <div className='div_colores'>
                <h3 className='h3_search'>Color</h3>
                <div className='org_colores'>
                    <h4 className={(activeColor === 'all')?'h4_category checked':'h4_category'} 
                        onClick={()=>{changeActiveColorAndUrlColor('all'); navigateToPageOne(navigate, params.page)}}>
                        all
                    </h4>
                    {arrayOfColorsComponents}
                </div>
            </div>
            <button type="button" className='btn_home btn_SearchBar' onClick={()=>resetSearchFilters(false)}>Clear Filters</button>
        </div>
    );
}
export default LateralSearchBar;