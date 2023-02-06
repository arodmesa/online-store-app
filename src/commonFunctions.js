import store from "./app/store";
import { changePercentageOfLoadedPortraits } from "./features/portraits/percentageOfLoadedPortraitsSlice";
import { changeAmountOfLoadedPortraits } from "./features/portraits/amountOfLoadedPortraitsSlice";
import { changeAreAllPortraitsLoaded } from "./features/portraits/areAllPortraitsLoadedSlice";
import { changeActiveCategory } from "./features/lateralSearchBar/activeCategorySlice";
import { changeActiveColor } from "./features/lateralSearchBar/activeColorSlice";
import { changeCategoryURL, changeColorURL, changeSearchTextURL } from "./features/urlFetch/urlPartsSlice";
import { changeUserEmailAddress } from "./features/emailSubscription/userEmailAddressSlice";
import { switchEnableButtonState } from "./features/emailSubscription/enableSubscribeButtonSlice";
import { resetDefaultAmount } from "./features/portraitDetails/defaultAmountOfPortraitsToAddCartSlice";
import { changeCurrentPageNumber } from "./features/paging/currentPageNumberSlice";
import { changeAmountOfResultsPages } from "./features/paging/amountOfResultsPagesSlice";
import { changePortraitsData } from "./features/portraits/portraitsDataSlice";
import { changeAmountOfPortraitsFinded } from "./features/portraits/amountOfPortraitsFindedSlice";
import fetchData from "./features/urlFetch/fetchData";
import { apiURL } from "./constants";

function resetLoadedPortraitsProcess(){
    store.dispatch(changeAmountOfLoadedPortraits(0));
    store.dispatch(changeAreAllPortraitsLoaded(false));
    store.dispatch(changePercentageOfLoadedPortraits(0));   
}
function resetSearchFilters(shouldResetPage){
    store.dispatch(changeActiveCategory('all'));
    store.dispatch(changeActiveColor('all'));
    store.dispatch(changeCategoryURL('all'));
    store.dispatch(changeColorURL('all'));
    store.dispatch(changeSearchTextURL(''));
    store.dispatch(changeUserEmailAddress(''));
    store.dispatch(switchEnableButtonState(false));
    store.dispatch(resetDefaultAmount());
    if (shouldResetPage){
      resetLoadedPortraitsProcess();
      store.dispatch(changeCurrentPageNumber(1))
    }
}  
function navigateToPageOne(navigate, currentPage){
  if (currentPage!=='1'){
      navigate('products/pageNum/1');
  }
  else{
      getData(1);
  }  
}  
function changeActiveCategoryAndUrlCategory(categoryName){  
  const activeCategory = store.getState().activeCategoryReducer.category;
  if (activeCategory !== categoryName){
    store.dispatch(changeActiveCategory(categoryName));          
    resetLoadedPortraitsProcess();
    store.dispatch(changeCategoryURL(categoryName)); 
  }                    
}  
function changeActiveColorAndUrlColor(colorName){
  const activeColor = store.getState().activeColorReducer.color;
  if (activeColor !== colorName){
    store.dispatch(changeActiveColor(colorName));              
    resetLoadedPortraitsProcess();
    store.dispatch(changeColorURL(colorName));
  } 
}
async function getData(navigate, pageNumber){
  try{
    const storeCurrentState = store.getState();
    const {categoryURL, colorURL, searchTextURL, pageURL} = storeCurrentState.urlPartsReducer
    store.dispatch(changeCurrentPageNumber(pageNumber));
    const obtainedResponse = await fetchData(apiURL + searchTextURL + categoryURL + colorURL + pageURL);
    if (obtainedResponse.customError){
      //////////////////////////////////////
      // DISPLAY NOTIFICATION //
      /////////////////////////////////////
      navigate('/error'); //// Mejor una notificacion quizas
    }else if(obtainedResponse.totalHits===0){
      navigate('PageNotFound');
    }else{
      store.dispatch(changeAmountOfResultsPages(Math.ceil(obtainedResponse.totalHits/20)));
      store.dispatch(changePortraitsData(obtainedResponse.hits));
      store.dispatch(changeAmountOfPortraitsFinded(obtainedResponse.totalHits));
      navigate(`/products/pageNum/${pageNumber}`);
    }
  }catch{
    //////////////////////////////////////
      // DISPLAY NOTIFICATION //
    /////////////////////////////////////
  }
      
}

export {resetLoadedPortraitsProcess, resetSearchFilters, navigateToPageOne, changeActiveCategoryAndUrlCategory, changeActiveColorAndUrlColor, getData};
 