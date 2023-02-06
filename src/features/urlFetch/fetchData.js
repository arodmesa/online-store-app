async function fetchData(url){
    try{
        const apiResponse = await (await fetch(url)).json();
        return (apiResponse);
    }catch(error){
        return ({customError: error})
    }
}

export default fetchData;