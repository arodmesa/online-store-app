import './style/paginas.css';
function Paginas({numero, handlePagClick}){
    return(
        <div className="pag" onClick={()=>handlePagClick(numero)}>
            <h4 className="h4_pag" >{numero}</h4>
        </div>
    );    
}
export default Paginas;