import Animation from './Animation';
import './style/details.css';
import './style/home.css';
import {useParams} from 'react-router';
function Details({getDetailProd, producto, cantidad, addCart, changeCantDetails}){
    const params= useParams();
    if (producto.id!=params.id){
        getDetailProd(params.id)
        return(<Animation/>);
    }
    return(
        <div className="div_details">
            <img className='img_detalles' src={producto.webformatURL} alt='imagen product'></img>
            <div className='org_detalles'>
                <div className='org_vMovil'>
                    <h1 className='h1_details'>{producto.tags}</h1>
                    <h1 className='h1_details'>{`$${producto.webformatHeight}`}</h1>
                    <h4 className='h4_details'>{`${producto.likes} likes`}</h4>
                    <h4 className='h4_details'>{`${producto.comments} comments`}</h4>
                    <h4 className='h4_details'>{`${producto.downloads} purchases`}</h4>
                    <h4 className='h4_details'>Available: <i>In stock</i></h4>
                    <h4 className='h4_details'>Author: <i>{producto.user}</i></h4>
                </div>                
                <div className='org_things'>
                    <div className='org_cant'>
                        <i className="fa fa-minus signo" onClick={()=>changeCantDetails('-')}></i>
                        <h3 className='h3_details'>{cantidad}</h3>
                        <i className="fa fa-plus signo" onClick={()=>changeCantDetails('+')}></i>
                    </div>
                    <button className='btn_home' type='button' onClick={addCart}>Add to cart</button>
                </div>                
            </div>
        </div>
    );
}
export default Details;