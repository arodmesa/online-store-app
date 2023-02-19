import './Card.css';
function Card({iconCard, titleCard, textCard}){
    return(
        <div className="divCard divColumn">
            <img className='imgCard' src={iconCard} alt='icono'></img>      
            <div className='divColumnCard organizeTextInCard'>
                <h3 className='cardTitle'>{titleCard}</h3>
                <p className='cardText'>{textCard}</p>
            </div>                 
        </div>
    );
}
export default Card;