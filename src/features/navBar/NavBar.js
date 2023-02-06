import './NavBar.css';
import {NavLink, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { resetSearchFilters } from '../../commonFunctions';
function NavBar(){
    const amountOfUniquePortraitsInCart = useSelector((state)=>state.amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart)
    return(
        <>
            <nav className='main_nav'>
                <img className='logo_nav' src={process.env.PUBLIC_URL + '/nav_logo.png'} alt='company logo'></img>
                <div className='div_nav'>
                    <NavLink className='navlink' to='/' onClick={()=>resetSearchFilters(true)}>Home</NavLink>            
                    <NavLink className='navlink' to='products/pageNum/1'>Products</NavLink>
                    <NavLink className='navlink' to='/about' onClick={()=>resetSearchFilters(true)}>About</NavLink>
                    <NavLink className='navlink test' to='/cart' onClick={()=>resetSearchFilters(true)} >
                        <h6 className='h6_nav'>{amountOfUniquePortraitsInCart}</h6>
                        <i className={'fa fa-shopping-cart'+((amountOfUniquePortraitsInCart > 0)?' red_cart':'')}></i>
                    </NavLink>
                    <NavLink className='navlink' to='/' onClick={()=>resetSearchFilters(true)} ><i className='fa fa-sign-in'></i></NavLink>
                </div>                
            </nav>
            <Outlet />
        </>        
    );
}
export default NavBar;