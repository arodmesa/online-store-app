import fetchData from "../urlFetch/fetchData";
import { apiURL } from "../../constants";

async function getPortraitData(portraitID){
    try{
        const portraitData = await fetchData(apiURL+`&id=${portraitID}`);
        return portraitData.hits[0];
    }catch{
        return {customError: 'Error'}
    }
}
export default getPortraitData;