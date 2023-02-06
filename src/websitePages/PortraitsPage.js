import './PortraitsPage.css';
import './HomePage.css';
import Portrait from "../features/portraits/Portrait";
import Page from "../features/paging/Page";
import LateralSearchBar from "../features/lateralSearchBar/LateralSearchBar";
import {useParams, useNavigate} from 'react-router';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../commonFunctions';
import { changePageURL } from '../features/urlFetch/urlPartsSlice';

function PortraitsPage(){
    const params= useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const portraitsData = useSelector((state)=>state.portraitsDataReducer.portraitsData);
    const currentPageNumber = useSelector((state)=>state.currentPageNumberReducer.currentPageNumber);
    const amountOfResultsPages = useSelector((state)=>state.amountOfResultsPagesReducer.amountOfResultsPages);
    const amountOfPortraitsFinded = useSelector((state)=>state.amountOfPortraitsFindedReducer.amountOfPortraitsFinded);
    useEffect(()=>{
        if (params.page!==currentPageNumber){
            dispatch(changePageURL(params.page));
            getData(navigate, params.page);
            console.log('useEffect update activo');
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })
    const arrayOfPortraitComponents = portraitsData.map((portraitData, index)=>{
       return(
            <Portrait key={index} portraitID={portraitData.id} price={portraitData.webformatHeight} tags={portraitData.tags} imagePreview={portraitData.webformatURL} />
        )
    })        
    const arrayOfPageComponents=[];   
    for (let i=0; i<amountOfResultsPages; i++){
        arrayOfPageComponents.push(
            <Page key={i} pageNumber={i+1} />
        );
    }

    return(
        <div className='divPpag'>
            <LateralSearchBar />
            <div className="org_elem">
                <h4 className="prod_encontrados">{`${amountOfPortraitsFinded} Portraits Found`}</h4>
                <div className='org_prod'>
                    {arrayOfPortraitComponents}
                </div>                
                <div className="org_pag">
                    {arrayOfPageComponents}
                </div>                
            </div>
        </div>
    );
}
export default PortraitsPage;