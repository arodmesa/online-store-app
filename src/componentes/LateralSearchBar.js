import {useParams} from 'react-router';
import './style/lateralsearchbar.css';
import CategoryBtn from "./CategoryBtn";
import Colores from "./Colores";
// Ponerle funcionalidad a esta busqueda por categoria
//Usar un estado con una string con la url de peticion al servidor e irle agregando a dicha string los parametros que requiere la url de la api segun se vayan adicionando
//OK/ FUncionalidad de marcar la categoria o color seleccionado

function LateralSearchBar({text_input, handleSearchInput, handleSearchClk, cambiarActivo, checked_cat, checked_color, resetFilters}){
    const params= useParams();
    const categorias=['all', 'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'];
    const colores=["grayscale", "transparent", "red", "orange", "yellow", "green", "turquoise", "blue", "lilac", "pink", "white", "gray", "black", "brown" ];
    const elementos_cat=[];
    const elementos_colores=[];
    categorias.map((value,index)=>{
        elementos_cat.push(
            <CategoryBtn key={index} index={index} nombre={value} cambiarActivo={cambiarActivo} checked_cat={checked_cat[index]}/>
        );
    })
    colores.map((value,index)=>{
        elementos_colores.push(
            <Colores key={index} index={index+1} color={value} cambiarActivo={cambiarActivo} checked_color={checked_color[index+1]}/>
        )
    })
    return(
        <div className='div_search'>
            <div className='search_input'>
                <input type='text' className='search_entrada' placeholder='Search' value={text_input} onChange={handleSearchInput}></input>
                <i className='fa fa-search' onClick={()=>handleSearchClk(params.page)}></i>
            </div>
            <div className='div_category'>
                <h3 className='h3_search'>Category</h3>
                <div className='org_cat'>
                    {elementos_cat}
                </div>                
            </div>
            <div className='div_colores'>
                <h3 className='h3_search'>Color</h3>
                <div className='org_colores'>
                    <h4 className={(checked_color[0])?'h4_category checked':'h4_category'} onClick={()=>cambiarActivo('color', 0)}>all</h4>
                    {elementos_colores}
                </div>
            </div>
            <button type="button" className='btn_home btn_SearchBar' onClick={()=>resetFilters(false)}>Clear Filters</button>
        </div>
    );
}
export default LateralSearchBar;