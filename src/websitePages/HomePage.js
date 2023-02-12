import './HomePage.css';
import Card from "../componentes/Card";
import Portrait from '../features/portraits/Portrait';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector} from 'react-redux';
import { sendSubscriptionEmail, enableSubscribeButton } from '../features/emailSubscription/emailFuntionalities';
import { cardsData, frontPagePortraitsIDs } from '../constants';
import getPortraitData from '../features/portraitDetails/getPortraitData';
import { displayNotification } from '../features/notificationBar/notificationFunctionalities';

function HomePage(){
    const navigate= useNavigate();
    const userEmailAddress = useSelector((state)=>state.userEmailAddressReducer.userEmailAddress);
    const isButtonEnabled = useSelector((state)=>state.enableSubscribeButtonReducer.isButtonEnabled);
    const [homePagePortraits, setHomePagePortraits] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const arrayOfFetch = frontPagePortraitsIDs.map((ID)=>getPortraitData(ID));
            const arrayOfComponents = [];
            for await (let portraitData of arrayOfFetch){
                if (portraitData.customError){
                    displayNotification("Some error has occurred, check your internet connection or try again later...", 2000);
                }else{
                    arrayOfComponents.push(
                        <Portrait key={portraitData.id} portraitID={portraitData.id} price={portraitData.webformatHeight}                                   
                                  tags={portraitData.tags} imagePreview={portraitData.webformatURL} 
                        />
                    )
                }
            }
            setHomePagePortraits(arrayOfComponents.slice());
        })()      
      },[])
    const cardsArray = cardsData.map((cardData,index)=>{
        return(
            <Card key={index} iconCard={cardData.iconCard} titleCard={cardData.titleCard} textCard={cardData.textCard} />
        )
    })       
    return(
        <div className='divHome divColumn'>
            <div className='section1 divColumn'>
                <h1 className="section1Title">Portraitify</h1>
                <p className='section1Text'>...the right portrait awaits you</p>
                <button type='button' className='shopNowBtn' onClick={()=>navigate('products/pageNum/1')} >SHOP NOW</button>                       
            </div>
            <div className='section2 divColumn'>
                <h2 className='section2Title'>Featured Portraits</h2>
                <div className='organizeImgPreview'>
                    {homePagePortraits}
                </div>
                <button className='shopNowBtn section2Btn' onClick={()=>navigate('products/pageNum/1')} >All portraits</button>
            </div>
            <div className='section3'>
                {cardsArray}
            </div>
            <div className='section4 divColumn'>
                <h3 className='section4Title'>Join our newsletter and get 10% off</h3>
                <p className='textSection4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>                   
                <div className='divRow'>
                    <input type='email' placeholder='Enter Email' className={'emailInput'+((isButtonEnabled)?'':' redInput')} required 
                           value={userEmailAddress} onChange={enableSubscribeButton} 
                           onKeyDown={(event)=>{
                            if(isButtonEnabled && event.key==='Enter'){
                                sendSubscriptionEmail();
                            }
                        }}>
                    </input>
                    <button type='button' className={'sendEmailBtn'+ ((isButtonEnabled)?'':' disabledBtn')} 
                            disabled={!isButtonEnabled} onClick={sendSubscriptionEmail}>
                            Subscribe 🔔
                    </button>
                </div>                    
             </div>
        </div>
    );
}

export default HomePage;