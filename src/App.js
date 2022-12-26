import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState, useEffect, lazy, Suspense} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import NavBar from './componentes/NavBar';
import Product from './componentes/Product';
import ElementoCarrito from './componentes/ElementoCarrito';
import Animation from './componentes/Animation';
import PageNotFound from './componentes/PageNotFound';
import ProductsPage from './componentes/ProductsPage';
import Details from './componentes/Details';
import Error from './componentes/Error';
const LazyHome= lazy(()=>import ('./componentes/Home'));
const LazyAbout= lazy(()=>import ('./componentes/About'));
const LazyCart= lazy(()=>import ('./componentes/Cart'));
//const lazyNavBar= lazy(()=>import ('./componentes/NavBar'));
//const lazyProduct= lazy(()=>import ('./componentes/Product'));
//const lazyElementoCarrito= lazy(()=>import ('./componentes/ElementoCarrito'));
//const lazyPageNotFound= lazy(()=>import ('./componentes/PageNotFound'));
//const LazyProductsPage= lazy(()=>import ('./componentes/ProductsPage'));

function App() {
  const [categorias_activas, SetCategoriaActiva]= useState((new Array(1).fill(true)).concat(new Array(20).fill(0)));
  const [colores_activos, SetColorActivo]= useState((new Array(1).fill(true)).concat(new Array(13).fill(0)));
  const [categoryURL, SetCatUrl]= useState('');
  const [colorURL, SetColorUrl]= useState('');
  const [color_actual, SetColorActual]= useState('all');
  const [searchStr, SetSearchStr] =useState('');
  const [categoria_actual, SetCategoriaActual]= useState('all');
  const [productosPagActual, SetProductosPagActual]=useState([]);
  const [pagActual, SetPagActual]= useState(1);
  const [cantPag, SetCantPag]=useState(1);
  const [cantResultados, SetCantResult]= useState(0);
  const [updatePage, SetUpdatePage] = useState(true);
  const [text_input, SetTextInput]=useState('');
  const [prod_portada, SetProdPortada]= useState([]);
  const [off_buttton, SetOffButton]= useState(true);
  const [emailAddress, SetEmailAddress]= useState('');
  const [elemCart, SetElemCart]= useState([]); // aqui estara un arreglo con todos los parametros para crear los compontentes de tipo ElementoCarrito
  const[componentesCarrito, SetComponentesCarrito]=useState([]); // aqui estara un arreglo con todos los compontentes de tipo ElementoCarrito
  const [cantProdDetalles, SetCantProdDetalles]= useState(1);
  const [cantElementosCart, SetCantElemCart]= useState(0);
  const [precioTotal, SetPrecioTotal] =useState(0);  
  const [allImgLoaded, SetAllImgLoaded]= useState(false);
  const [contImgCargadas, SetContadorImgCargadas]= useState(0);
  const [porciento, SetProciento]= useState(0);
  const [detalleProducto, SetDetalleProducto]= useState({});
  const fetchURL='https://pixabay.com/api/?key=26156012-7935c4847898e39ba3f45df31';
  const navigate=useNavigate(); 
  ///// FUNCIONES ////
  function cambiarActivo(tipo, index, pag){
    const categorias=['all', 'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'];
    const colores=["all", "grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown" ];
    // el tipo es color u otro
    if (tipo==='color' && color_actual!==colores[index]){
      resetLoaded();
      SetColorActivo(()=>{
        let temp= new Array(14).fill(false);
        temp[index]=true;
        return temp.slice();
      })
      SetColorUrl(`&colors=${colores[index]}`);
      SetColorActual(colores[index]);
    }
    else if (tipo!=='color' && categoria_actual!==categorias[index]) {
      resetLoaded();
      SetCategoriaActiva(()=>{
        let temp= new Array(21).fill(false);
        temp[index]=true;
        return temp.slice();
      })
      SetCatUrl(`&category=${categorias[index]}`);
      SetCategoriaActual(categorias[index]);
    }
    if (pag!=='1'){
      navigate('products/pageNum/1');
    }
    else{
      getData(1);
    }        
  }
  function handlePagClick(numero){
    resetLoaded();
    if (cantPag>1 && pagActual!==numero){
      navigate(`products/pageNum/${numero}`);         
    }    
  }
  function handleSearchInput(event){
    SetTextInput(event.target.value);
  }
  function handleSearchClk(pag){
    resetLoaded();
    let temp_str= text_input.replace(/\s/g, "+");
    SetSearchStr(temp_str); 
    if (pag!=='1'){
      navigate('products/pageNum/1');
    }
    else{
      getData(1);
    }       
  }
  function resetFilters(reset_page){
    SetCategoriaActiva((new Array(1).fill(true)).concat(new Array(20).fill(0)));
    SetColorActivo((new Array(1).fill(true)).concat(new Array(13).fill(0)));
    SetTextInput('');
    SetSearchStr('');
    SetCatUrl('');
    SetColorUrl('');
    SetCategoriaActual('all');
    SetColorActual('all');
    SetUpdatePage(true);
    SetEmailAddress('');
    SetOffButton(true);
    SetCantProdDetalles(1);
    if (reset_page){
      resetLoaded(); 
      SetPagActual(1);
    }    
    //SetProductosPagActual([]);
  }  
  function getData(page){
    try{
      SetPagActual(page);
      fetch(fetchURL+`&q=${searchStr}`+categoryURL+colorURL+`&page=${page}`)
      .then(res=>res.json())
      .then(data=>{
        if (data.totalHits===0){
          navigate('PageNotFound');
        }
        else{
          SetCantPag(Math.ceil(data.totalHits/20));
          SetProductosPagActual(data.hits);
          SetCantResult(data.totalHits);
          navigate(`products/pageNum/${page}`);
        }               
      });
    }catch{
      navigate('/error');
    }        
  }
  function sendEmail() {
    window.Email.send({
      SecureToken: "be618017-4606-4c16-925b-474c0be7185b",
      To: emailAddress,
      From: "testOnlineStoreReact@gmail.com",
      Subject: "Thanks for subscribing!!!",
      Body: "Thanks for subcribing ❤️. You will receive news ✉️ from us soon...",
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
  }
  function enableButton(event){
    SetOffButton(!event.target.checkValidity(event.target.value));
    SetEmailAddress(event.target.value);
  }
  function addCart(){
    let elemento=detalleProducto;
    //let carrito= elemCart.slice();
    let flag= false; // indica si el producto ya existe en el carrito
    let temp={
        precio: elemento.webformatHeight,
        imag: elemento.previewURL,
        nombre: elemento.tags,
        cantidad: cantProdDetalles,
        subtotal: elemento.webformatHeight*cantProdDetalles,
        id: elemento.id
    };
    alert('Product added to the cart!!');
    let carrito=elemCart.map((value)=>{
      if (value.id===temp.id){
        flag=true;
        value.cantidad=value.cantidad+temp.cantidad;
        value.subtotal=value.subtotal+temp.subtotal
      }
      return value;
    })
    if(flag===false){
      carrito.push(temp);
    }    
    SetElemCart(carrito.slice());
    SetCantElemCart((prev)=>prev+1);
  }
  function removeCart(id){
    SetElemCart((prev_elem)=>{
        let temp = prev_elem.filter((value)=>value.id!==id);
        return(temp.slice());
    })  
    SetCantElemCart((prev)=>prev-1);  
  }
  function variarCantidad(operacion, id){
    let temp=elemCart.map((value)=>{
      if(value.id===id){
          value.cantidad=(operacion==='+')?value.cantidad+1:value.cantidad-1;
          if (value.cantidad<1){
              value.cantidad=1;
          }
          value.subtotal= value.cantidad*value.precio;
      }
      return value;
    })
    SetElemCart(temp.slice())
    actElementosCarrito();
}
  function clearShoppingCart(){
      SetElemCart([]);
      SetCantElemCart(0);
  }
  function pay(){
      alert('Thanks for purchasing!!!');
      clearShoppingCart();
  }
  function imgLoaded(){
    if (contImgCargadas+1===productosPagActual.length){
      SetAllImgLoaded(true);
    }
    SetProciento(Math.floor(100*(contImgCargadas+1)/productosPagActual.length));
    SetContadorImgCargadas((contAnterior)=>{      
      return(contAnterior+1)
    });
  }
  function resetLoaded(){
    SetProciento(0);
    SetContadorImgCargadas(0);
    SetAllImgLoaded(false);    
  }
  function getDetailProd(id){
    //resetLoaded();
    try{
      fetch(fetchURL+`&id=${id}`)
      .then(res=>res.json())
      .then(data=>{
        SetDetalleProducto(data.hits[0])
        //navigate(`products/pageNum/${page}`);
      });
    }catch{
      navigate('PageNotFound');
    }
    
  }
  function changeCantDetails(operacion){
    if (operacion!=='+'&& cantProdDetalles-1<1){
      return;
    }
    SetCantProdDetalles((cantAnterior)=>{
      return (operacion==='+')?cantAnterior+1:cantAnterior-1;
    })
  }
  function actElementosCarrito(){
    if(elemCart.length>0){
      let precios=elemCart.map((value)=>value.subtotal);
      let total= precios.reduce((previousValue, currentValue) => previousValue + currentValue);
      SetPrecioTotal(total);
    }
    if (elemCart.length===0 && precioTotal!==0){
      SetPrecioTotal(0);
    }
    let elementos=elemCart.map((value,index)=>{
      return(
        <ElementoCarrito key={index} id={value.id} precio={value.precio} imag={value.imag} nombre={value.nombre} cantidad={value.cantidad} subtotal={value.subtotal} variarCantidad={variarCantidad} removeCart={removeCart} />
      );
    })
    SetComponentesCarrito(elementos);
  }
  useEffect(()=>{
    fetch(fetchURL)
    .then(res=>res.json())
    .then(data=>{
      let temp=[]
      for (let i=0; i<3; i++){
        temp.push(
            <Product key={i} clase_img={'imagen_portada'} getDetailProd={getDetailProd} id={data.hits[i+8].id} precio={data.hits[i+8].webformatHeight} tags={data.hits[i+8].tags} img_preview={data.hits[i+8].webformatURL} />
        )
      }
      SetProdPortada(temp.slice());
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect (()=>{
    actElementosCarrito();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cantElementosCart])
 
  ///////////////////
  //<Route index element={<ProductsPage updatePage={updatePage} getData={getData} pagActual={pagActual} cantPag={cantPag} cantProdEncontrados={cantResultados} text_input={text_input} handleSearchInput={handleSearchInput} handleSearchClk={handleSearchClk} datos_productos={productosPagActual} cambiarActivo={cambiarActivo} checked_cat={categorias_activas} checked_color={colores_activos} resetFilters={resetFilters} handlePagClick={handlePagClick} />}></Route>
  return (
    <div className="App">
      <NavBar resetFilters={resetFilters} componentesCarrito={componentesCarrito}/>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Animation />}>
            <LazyHome emailAddress={emailAddress} enableButton={enableButton} off_buttton={off_buttton} sendEmail={sendEmail} prod_portada={prod_portada}/>
          </Suspense>
          }
        />
        <Route path='about' element={
            <Suspense fallback={<Animation />}>
                <LazyAbout/>
            </Suspense>            
          }         
        />
        <Route path='products' >
          <Route path='pageNum/:page' element={
            <>
              <div style={(allImgLoaded)?{display:'block'}:{display:'none'}}>
                <ProductsPage getDetailProd={getDetailProd} imgLoaded={imgLoaded} updatePage={updatePage} getData={getData} pagActual={pagActual} cantPag={cantPag} cantProdEncontrados={cantResultados} text_input={text_input} handleSearchInput={handleSearchInput} handleSearchClk={handleSearchClk} datos_productos={productosPagActual} cambiarActivo={cambiarActivo} checked_cat={categorias_activas} checked_color={colores_activos} resetFilters={resetFilters} handlePagClick={handlePagClick} /> 
              </div>
              <div style={(allImgLoaded)?{display:'none'}:{display:'block'}}>  
                <div style={{ width: '25vw', height: '25vw' }}>
                  <CircularProgressbar value={porciento} text={`${porciento}%`} />
                </div>
              </div> 
            </>           
          }           
        />
        </Route>
        <Route path='product'>
          <Route path='ID/:id' element={<Details getDetailProd={getDetailProd} producto={detalleProducto} cantidad={cantProdDetalles} addCart={addCart} changeCantDetails={changeCantDetails} />}></Route>
        </Route>
        <Route path='cart' element={
          <Suspense fallback={<Animation />}>
            <LazyCart componentesCarrito={componentesCarrito} precioTotal={precioTotal} pay={pay} clearShoppingCart={clearShoppingCart} />
          </Suspense>          
          }         
        />
        <Route path='error' element={<Error />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <footer className='pixabay'>
        <h4 className='h4_pixabay'>All images were obtained from <a className='a_pixabay' href='https://pixabay.com/' target='_blank' rel="noreferrer">Pixabay API</a> . Thanks to the developers.</h4>
      </footer>
    </div>
  );
}

export default App;
