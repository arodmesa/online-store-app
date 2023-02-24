import store from "../../app/store";
import { changeAreAllPortraitsLoaded } from "./areAllPortraitsLoadedSlice";
import { changePercentageOfLoadedPortraits } from "./percentageOfLoadedPortraitsSlice";
import { changeAmountOfLoadedPortraits } from "./amountOfLoadedPortraitsSlice";
function controlPortraitsLoadingProcess(){
    const amountOfLoadedPortraits = store.getState().amountOfLoadedPortraitsReducer.amountOfLoadedPortraits;
    const portraitsData = store.getState().portraitsDataReducer.portraitsData;
    const totalAmountOfProductsToLoad = portraitsData.length;
    if (amountOfLoadedPortraits + 1 === totalAmountOfProductsToLoad){
      store.dispatch(changeAreAllPortraitsLoaded(true));
    }
    store.dispatch(changePercentageOfLoadedPortraits(Math.floor(100*(amountOfLoadedPortraits + 1)/totalAmountOfProductsToLoad)))
    store.dispatch(changeAmountOfLoadedPortraits(amountOfLoadedPortraits + 1));
}

export {controlPortraitsLoadingProcess};