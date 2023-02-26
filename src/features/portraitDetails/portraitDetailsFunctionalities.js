import fetchData from "../urlFetch/fetchData";
import { apiURL } from "../../constants";
import store from "../../app/store";
import { changePortraitDetails } from "./portraitDetailsSlice";

async function fetchAndChangePortraitDetails(navigate, portraitID){  
  try{
      const portraitData = await fetchData(apiURL+`&id=${portraitID}`);
      store.dispatch(changePortraitDetails(portraitData.hits[0]));
    }catch{
      navigate('PageNotFound');
    }    
}

export {fetchAndChangePortraitDetails};