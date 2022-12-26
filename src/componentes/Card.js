import './style/card.css';
function Card({icono_card, titulo_card, texto_card}){
    return(
        <div className="div_card">
            <div className='org_card'>
                <img className='img_card' src={icono_card} alt='icono'></img>
            </div>       
            <div className='org_text_card'>
                <h3 className='h3_card'>{titulo_card}</h3>
                <p className='p_card'>{texto_card}</p>
            </div>                 
        </div>
    );
}
export default Card;