import './LateralSearchBar.css';
import CategoryButtons from "./CategoryButtons";
import ColorButtons from "./ColorButtons";
import {useNavigate, useParams} from 'react-router';
import { useState } from 'react';
import { categories, colors } from '../../constants';
import { useSelector, useDispatch} from 'react-redux';
import { changeActiveColorAndUrlColor, navigateToPageOne, resetSearchFilters, resetLoadedPortraitsProcess, getData } from '../../commonFunctions';
import { changeSearchInputText } from './searchInputTextSlice';
import { changeSearchTextURL } from '../urlFetch/urlPartsSlice';

function LateralSearchBar(){
    const params= useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const matchMedia = window.matchMedia( '(max-width: 900px)' );
    matchMedia.onchange = (event)=>{
        if(event.matches !== isLateralBarMinimized){
        setMinimizeLateralBar(!isLateralBarMinimized);
        }
    }
    const [isLateralBarMinimized, setMinimizeLateralBar] = useState(matchMedia.matches);
    const searchInputText = useSelector((state)=>state.searchInputTextReducer.inputText);
    const onlyColors = colors.slice(1);
    const activeColor = useSelector((state)=>state.activeColorReducer.color);
    const arrayOfCategoryBtnComponents  = categories.map((categoryName, index)=>{
        return(
            <CategoryButtons key={index} categoryName={categoryName} minimizeLateralBar={minimizeLateralBar} />
        );
    })
    const arrayOfColorsComponents = onlyColors.map((colorName,index)=>{
        return(
            <ColorButtons key={index} colorName={colorName} minimizeLateralBar={minimizeLateralBar}/>
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
    function minimizeLateralBar(shouldMinimizeBar){
        const isNotDesktopDevice = matchMedia.matches;
        if (isNotDesktopDevice){
            setMinimizeLateralBar(shouldMinimizeBar);
        }        
    }
    const lateralBar = 
        <div className='divSearchBar divColumnLateralBar'>
            <div className='organizeSearchInput divRow'>
                <input type='text' className='searchInput' placeholder='Type your keyword here' value={searchInputText} onChange={(event)=>dispatch(changeSearchInputText(event.target.value))} 
                    onKeyDown={(event)=>{
                        if(event.key==='Enter'){handleSearchButtonClick(params.page); minimizeLateralBar(true)}
                    }}>
                </input>
                <i className='fa fa-search' onClick={()=>{handleSearchButtonClick(params.page); minimizeLateralBar(true)}}></i>
            </div>
            <div className='divCategories divColumnLateralBar'>
                <h3 className='lateralBarHeaders'>Categories</h3>
                <div className='organizeCategories'>
                    {arrayOfCategoryBtnComponents}
                </div>                
            </div>
            <div className='divColors divColumnLateralBar'>
                <h3 className='lateralBarHeaders'>Colors</h3>
                <div className='organizeColors'>
                    <h4 className={(activeColor === 'all')?'h4_category checked':'h4_category'} 
                        onClick={()=>{changeActiveColorAndUrlColor('all'); navigateToPageOne(navigate, params.page)}}>
                        all
                    </h4>
                    {arrayOfColorsComponents}
                </div>
                <button type="button" className='clearFiltersBtn' onClick={()=>resetSearchFilters(false)}>Clear Filters</button>
            </div>            
        </div>
    return(
            <>
                {
                    (isLateralBarMinimized)?
                    <i className='fa fa-angle-double-right arrowStyle' onClick={()=>setMinimizeLateralBar(false)}></i>:
                    <div className='searchBarContainer'>
                        {lateralBar}
                        <i className='fa fa-angle-double-left arrowStyle' onClick={()=>setMinimizeLateralBar(true)}></i>
                    </div>
                }
            </>
    );
}
export default LateralSearchBar;