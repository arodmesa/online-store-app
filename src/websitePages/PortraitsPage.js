import './PortraitsPage.css';
import './HomePage.css';
import Portrait from "../features/portraits/Portrait";
import Page from "../features/paging/Page";
import LateralSearchBar from "../features/lateralSearchBar/LateralSearchBar";
import BackgroundForNavBar from '../features/backgroundForNavBar/BackgroundForNavBar';
import {useParams, useNavigate} from 'react-router';
import {useEffect, useState} from 'react';
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
    const [startingPageNumberBtn, setStartingPageNumberBtn] = useState(Math.floor(Number(params.page)/5 - 0.001) * 5 + 1);
    useEffect(()=>{
        if (Number(params.page)!==currentPageNumber){
            dispatch(changePageURL(params.page));
            getData(navigate, params.page);
            calculateStartingPageNumberBtn(params.page);
        }        
    })
    const arrayOfPortraitComponents = portraitsData.map((portraitData, index)=>{
       return(
            <Portrait key={index} portraitID={portraitData.id} price={portraitData.webformatHeight} tags={portraitData.tags} imagePreview={portraitData.webformatURL} isResultsPage={true}/>
        )
    })        
    const arrayOfPageComponents=[];   
    for (let i=0; i<amountOfResultsPages; i++){
        arrayOfPageComponents.push(
            <Page key={i} pageNumber={i+1} startingPageNumberBtn={startingPageNumberBtn}/>
        );
    }
    function calculateStartingPageNumberBtn(pageNumber){
        pageNumber = Number(pageNumber);
        const newStartingPageNumberBtn = Math.floor(pageNumber/5 - 0.001) * 5 + 1;
        setStartingPageNumberBtn(newStartingPageNumberBtn);
    }
    function decrementStartingPageNumberBtn(){
        if (startingPageNumberBtn > 1){
            setStartingPageNumberBtn((oldStartingPage)=>oldStartingPage - 5)
        }
    }
    function incrementStartingPageNumberBtn(){
        if (startingPageNumberBtn + 5 <= amountOfResultsPages){
            setStartingPageNumberBtn((oldStartingPage)=>oldStartingPage + 5)
        }
    }
    return(
        <>
            <BackgroundForNavBar />
            <div className='divPortraitsPage'>  
                <LateralSearchBar />          
                <div className="organizeResultsDiv divColumn">
                    <h4 className="amountOfResults">{`${amountOfPortraitsFinded} Portraits Found`}</h4>
                    <div className='organizePortraits'>
                        {arrayOfPortraitComponents}
                    </div>                
                    <div className="organizePageButtons">
                        <i className="fa fa-chevron-circle-left" onClick={decrementStartingPageNumberBtn}></i>
                        {arrayOfPageComponents}
                        <i className="fa fa-chevron-circle-right" onClick={incrementStartingPageNumberBtn}></i>
                    </div>                
                </div>
            </div>
        </>        
    );
}
export default PortraitsPage;