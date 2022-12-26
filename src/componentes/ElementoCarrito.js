import './style/details.css';
import './style/elementocarrito.css';
function ElementoCarrito({id, precio, imag, nombre, cantidad, subtotal, variarCantidad, removeCart}){
    return(
        <>
            <tr>
                <th>
                    <div className='org_imgCart'>
                        <img className='img_cart' src={imag} alt='product'></img>
                        <h4 className='h4_cart'>{nombre}</h4>
                    </div>
                </th>
                <th>
                    <h4 className='h4_dinero'> {`$${precio}`}</h4>                   
                </th>
                <th>
                    <div className='cantProd'>
                    <h3 className='h3_cant h3_details'> 
                        <i className="fa fa-minus signo cant" onClick={()=>variarCantidad('-', id)}></i>
                        {cantidad}
                        <i className="fa fa-plus signo cant" onClick={()=>variarCantidad('+', id)} ></i>
                    </h3>
                    </div>
                </th>
                <th>
                    <h4 className='h4_dinero'>{`$${subtotal}`}</h4>
                </th>
                <th><i className="fa fa-trash-o" onClick={()=>removeCart(id)}></i></th>
            </tr>
        </>
    );
}
export default ElementoCarrito;