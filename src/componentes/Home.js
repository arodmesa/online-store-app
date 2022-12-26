import './style/home.css';
import Card from "./Card";
import {useNavigate} from 'react-router-dom';
//https://react-course-comfy-sloth-store.netlify.app/products
//https://pixabay.com/api/docs/

function Home({enableButton, emailAddress, off_buttton, sendEmail, prod_portada}){
    const navigate= useNavigate();
    let datos_cards=[
        {
            icono_card:'https://icon-library.com/images/goal-icon-png/goal-icon-png-15.jpg',
            titulo_card: 'Mission',
            texto_card: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          },
          {
            icono_card:'https://icon-library.com/images/vision-icon/vision-icon-14.jpg',
            titulo_card: 'Vision',
            texto_card: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          },
          {
            icono_card:'https://icon-library.com/images/history-icon-png/history-icon-png-2.jpg',
            titulo_card: 'History',
            texto_card: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi'
          }
    ];
    const cards=[];
    datos_cards.map((value,index)=>{
        cards.push(
            <Card key={index} icono_card={value.icono_card} titulo_card={value.titulo_card} texto_card={value.texto_card} />
        );
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
                    {prod_portada}
                </div>
                <button className='btn_home s2' onClick={()=>navigate('products/pageNum/1')} >All products</button>
            </div>
            <div className='section3'>
                {cards}
            </div>
            <div className='section4'>
                <div className='div_email'>
                    <div className='org_p_texto'>
                        <h3 className='h3_home'>Join our newsletter and get 10% off</h3>
                        <p className='p_texto subs_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                    </div>                    
                    <div className='org_contenido'>
                        <input type='email' placeholder='Enter Email' className={'email_input'+((off_buttton)?' red_input':'')} required onChange={enableButton} value={emailAddress}></input>
                        <button type='button' className={'btn_home subs'+ ((off_buttton)?' disabledBtn':'')} disabled={off_buttton} onClick={sendEmail}>Subscribe</button>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default Home;