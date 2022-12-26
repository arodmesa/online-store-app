import './style/productspage.css';
import './style/home.css';
import Product from "./Product";
import Paginas from "./Paginas";
import LateralSearchBar from "./LateralSearchBar";
import {useParams} from 'react-router';
import {useEffect} from 'react';

function ProductsPage({getDetailProd, imgLoaded, updatePage, getData, pagActual, cantPag, cantProdEncontrados, text_input, handleSearchInput, handleSearchClk, datos_productos, cambiarActivo, checked_cat, checked_color, resetFilters, handlePagClick}){
    const productos=[];
    const paginas=[];
    const params= useParams();
    useEffect(()=>{
        if (updatePage && params.page!==pagActual){
            getData(params.page);
            console.log('useEffect update activo');
        }        
    })
    datos_productos.map((value, index)=>{
        productos.push(
            <Product key={index} getDetailProd={getDetailProd} imgLoaded={imgLoaded} id={value.id} precio={value.webformatHeight} tags={value.tags} img_preview={value.webformatURL} />
        )
    })        
       
    for (let i=0; i<cantPag; i++){
        paginas.push(
            <Paginas key={i} numero={i+1} handlePagClick={handlePagClick} />
        );
    }

    return(
        <div className='divPpag'>
            <LateralSearchBar text_input={text_input} handleSearchInput={handleSearchInput} handleSearchClk={handleSearchClk} cambiarActivo={cambiarActivo} checked_cat={checked_cat} checked_color={checked_color} resetFilters={resetFilters} />
            <div className="org_elem">
                <h4 className="prod_encontrados">{`${cantProdEncontrados} Portraits Found`}</h4>
                <div className='org_prod'>
                    {productos}
                </div>                
                <div className="org_pag">
                    {paginas}
                </div>                
            </div>
        </div>
    );
}
export default ProductsPage;