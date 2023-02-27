import store from "../../app/store";
import { resetLoadedPortraitsProcess } from "../../commonFunctions";
function handlePageButtonCliked(navigate, clickedPageNumber){
    resetLoadedPortraitsProcess();
    const amountOfResultsPages = store.getState().amountOfResultsPagesReducer.amountOfResultsPages;
    const currentPage = store.getState().currentPageNumberReducer.currentPageNumber;
    if (amountOfResultsPages > 1 && currentPage!==clickedPageNumber){
      navigate(`/products/pageNum/${clickedPageNumber}`);         
    }    
}
export {handlePageButtonCliked};