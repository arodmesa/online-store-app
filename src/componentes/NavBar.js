import './style/navbar.css';
import {NavLink, Outlet} from 'react-router-dom';
function NavBar({resetFilters, componentesCarrito}){
    return(
        <>
            <nav className='main_nav'>
                <img className='logo_nav' src={process.env.PUBLIC_URL + '/nav_logo.png'} alt='company logo'></img>
                <div className='div_nav'>
                    <NavLink className='navlink' to='/' onClick={()=>resetFilters(true)}>Home</NavLink>            
                    <NavLink className='navlink' to='products/pageNum/1'>Products</NavLink>
                    <NavLink className='navlink' to='/about' onClick={()=>resetFilters(true)}>About</NavLink>
                    <NavLink className='navlink test' to='/cart' onClick={()=>resetFilters(true)} >
                        <h6 className='h6_nav'>{`${componentesCarrito.length}`}</h6>
                        <i className={'fa fa-shopping-cart'+((componentesCarrito.length>0)?' red_cart':'')}></i>
                    </NavLink>
                    <NavLink className='navlink' to='/' onClick={()=>resetFilters(true)} ><i className='fa fa-sign-in'></i></NavLink>
                </div>                
            </nav>
            <Outlet />
        </>        
    );
}
export default NavBar;