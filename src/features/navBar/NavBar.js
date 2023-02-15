import './NavBar.css';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { resetSearchFilters } from '../../commonFunctions';
import { useState } from 'react';
function NavBar({isHorizontalBarsVisible, desactivateHorizontalBarsVisibility}){
    const amountOfUniquePortraitsInCart = useSelector((state)=>state.amountOfUniquePortraitsInCartReducer.amountOfUniquePortraitsInCart)
    const matchMedia = window.matchMedia( '(max-width: 550px)' );  
    const navigate = useNavigate();
    matchMedia.onchange = (event)=>{
        if(event.matches !== isMobileDevice){
        setIsMobileDevice(!isMobileDevice);
        }
    }
    const [isMobileDevice, setIsMobileDevice] = useState(matchMedia.matches);
    const navigationLinks =<div className='divNav'>
                                <NavLink className='navlink' to='/' onClick={()=>resetSearchFilters(true)}>Home</NavLink>            
                                <NavLink className='navlink' to='products/pageNum/1'>Portraits</NavLink>
                                <NavLink className='navlink' to='/about' onClick={()=>resetSearchFilters(true)}>About</NavLink>
                                <NavLink className='navlink cartLink' to='/cart' onClick={()=>resetSearchFilters(true)} >
                                    <h6 className='floatingNumber'>{amountOfUniquePortraitsInCart}</h6>
                                    <i className={'fa fa-shopping-cart'+((amountOfUniquePortraitsInCart > 0)?' red_cart':'')}></i>
                                </NavLink>
                                <NavLink className='navlink' to='/' onClick={()=>resetSearchFilters(true)} ><i className='fa fa-sign-in'></i></NavLink>
                            </div>
    let contentToRender;
    if (isMobileDevice){
        contentToRender = ((isHorizontalBarsVisible)?<i className="fa fa-bars" onClick={(event)=>{event.preventDefault(); desactivateHorizontalBarsVisibility()}}></i>:navigationLinks);
    }else{
        contentToRender = navigationLinks;
    }
    return(
        <>
            <nav className='mainNav'>
                <img className='logoNav' src={process.env.PUBLIC_URL + '/nav_logo.png'} alt='company logo' onClick={()=>navigate('/')}></img>
                {contentToRender}         
            </nav>
            <Outlet />
        </>        
    );
}
export default NavBar;