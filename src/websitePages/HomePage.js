import './HomePage.css';
import Card from "../componentes/Card";
import Portrait from '../features/portraits/Portrait';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector} from 'react-redux';
import { sendSubscriptionEmail, enableSubscribeButton } from '../features/emailSubscription/emailFuntionalities';
import { cardsData, frontPagePortraitsIDs } from '../constants';
import getPortraitData from '../features/portraitDetails/getPortraitData';

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
                    ///////////////////////
                    // DISPLAY NOTIFICATION
                    console.log('ERROR');
                    ///////////////////////
                }else{
                    arrayOfComponents.push(
                        <Portrait key={portraitData.id} imgClassName={'imagen_portada'} 
                                  portraitID={portraitData.id} price={portraitData.webformatHeight} 
                                  tags={portraitData.tags} imagePreview={portraitData.webformatURL} 
                        />
                    )
                }
            }
            setHomePagePortraits(arrayOfComponents.slice());
        })()      
      },[])
    const cardsArray = cardsData.map((value,index)=>{
        return(
            <Card key={index} icono_card={value.icono_card} titulo_card={value.titulo_card} texto_card={value.texto_card} />
        )
    })       
    return(
        <div className='div_Home'>
            <div className='section1'>
                <h1 className="h1_title">Find the Perfect Portrait</h1>
                <p className='p_texto'>Lorem ipsum dolor sit amet consectetur adipiscing, elit erat sodales sem commodo facilisi, nibh semper lobortis proin duis. Accumsan class nunc tempor eros arcu elementum netus congue cum risus purus libero quis, etiam dis sagittis nec porta enim parturient diam sociis pharetra sodales.</p>
                <button type='button' className='btn_home' onClick={()=>navigate('products/pageNum/1')} >SHOP NOW</button>                       
            </div>
            <div className='section2'>
                <h2 className='h2_title'>Featured Products</h2>
                <div className='org_img_preview'>
                    {homePagePortraits}
                </div>
                <button className='btn_home s2' onClick={()=>navigate('products/pageNum/1')} >All products</button>
            </div>
            <div className='section3'>
                {cardsArray}
            </div>
            <div className='section4'>
                <div className='div_email'>
                    <div className='org_p_texto'>
                        <h3 className='h3_home'>Join our newsletter and get 10% off</h3>
                        <p className='p_texto subs_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    </div>                    
                    <div className='org_contenido'>
                        <input type='email' placeholder='Enter Email' className={'email_input'+((isButtonEnabled)?'':' red_input')} required onChange={enableSubscribeButton} value={userEmailAddress}></input>
                        <button type='button' className={'btn_home subs'+ ((isButtonEnabled)?'':' disabledBtn')} disabled={!isButtonEnabled} onClick={sendSubscriptionEmail}>Subscribe</button>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default HomePage;