// Para el precio usar obj.webformatHeight
import { useNavigate } from 'react-router-dom';
import './style/product.css'
function Product({getDetailProd, imgLoaded, id, precio, tags, img_preview, clase_img}){
    const navigate=useNavigate();
    return(
        <div className="div_product">
            <div className="div_img_prod">
                <img className={'img_preview'+` ${clase_img}`} src={img_preview} alt='product' onLoad={imgLoaded} onClick={()=>{getDetailProd(id); navigate(`/product/ID/${id}`)}}></img>
                <div className="eyes_div" onClick={()=>{getDetailProd(id); navigate(`/product/ID/${id}`)}}>
                    <i className="fa fa-eye"></i>
                    <i className="fa fa-eye"></i>
                </div>                
            </div>            
            <div className='org_h4'>
                <h4 className='h4_products'>{tags}</h4>
                <h4 className='h4_products'>{`$${precio}`}</h4>
            </div>
        </div>
    );
}
export default Product;