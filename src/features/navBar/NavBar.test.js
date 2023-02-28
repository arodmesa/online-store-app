/* eslint-disable import/first */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: () => mockedUsedNavigate,
}));
const mockedResetSearchFilters = jest.fn();
jest.mock('../../commonFunctions', () => ({
...jest.requireActual('../../commonFunctions'),
resetSearchFilters: () => mockedResetSearchFilters(),
}));
import { Provider } from "react-redux";
import {render, screen, fireEvent} from '@testing-library/react';
import { changeHorizontalBarsIconVisibility } from "./horizontalBarsIconVisibilitySlice";
import store from "../../app/store";
import NavBar from "./NavBar";
import {BrowserRouter} from 'react-router-dom'

function setUpNavBar(isMobileDevice){
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: isMobileDevice,
          media: query,
          onchange: null,
        })),
    });
    render( 
        <Provider store={store}>
            <NavBar />
        </Provider>, {wrapper: BrowserRouter}
    )
}
describe('check all posible cases of elements displayed by the NavBar',()=>{
    it('isHorizontalBarsIconVisible = true, window width <= 550px therefore isMobileDevice = true',()=>{
        const isMobileDevice = true;
        store.dispatch(changeHorizontalBarsIconVisibility(true));
        setUpNavBar(isMobileDevice);      
        const navElement = screen.getByTitle('mainNav');  
        const iTag = screen.getByTitle('fa-bars');
        expect(iTag).toBeInTheDocument();
        expect(() => screen.getByTitle('divNav')).toThrow();
        expect(navElement).not.toHaveClass('deployed');
    })
    it('isHorizontalBarsIconVisible = false, window width <= 550px therefore isMobileDevice = true',()=>{
        const isMobileDevice = true;
        store.dispatch(changeHorizontalBarsIconVisibility(false));
        setUpNavBar(isMobileDevice);        
        const divNavLinks = screen.getByTitle('divNav');
        const navElement = screen.getByTitle('mainNav');
        expect(divNavLinks).toBeInTheDocument();
        expect(() => screen.getByTitle('fa-bars')).toThrow();
        expect(navElement).toHaveClass('deployed');
    })
    it('isHorizontalBarsIconVisible = true, window width > 550px therefore isMobileDevice = false',()=>{
        const isMobileDevice = false;
        store.dispatch(changeHorizontalBarsIconVisibility(true));
        setUpNavBar(isMobileDevice);        
        const divNavLinks = screen.getByTitle('divNav');
        const navElement = screen.getByTitle('mainNav');
        expect(divNavLinks).toBeInTheDocument();
        expect(() => screen.getByTitle('fa-bars')).toThrow();
        expect(navElement).not.toHaveClass('deployed');
    })
    it('isHorizontalBarsIconVisible = false, window width > 550px therefore isMobileDevice = false',()=>{
        const isMobileDevice = false;
        store.dispatch(changeHorizontalBarsIconVisibility(false));
        setUpNavBar(isMobileDevice);        
        const divNavLinks = screen.getByTitle('divNav');
        const navElement = screen.getByTitle('mainNav');
        expect(divNavLinks).toBeInTheDocument();
        expect(() => screen.getByTitle('fa-bars')).toThrow();
        expect(navElement).not.toHaveClass('deployed');
    })
})
test('change horizontalBarsIconVisibility then whe are in mobile version',()=>{
    const isMobileDevice = true;
    store.dispatch(changeHorizontalBarsIconVisibility(true));
    setUpNavBar(isMobileDevice);   
    const iTag = screen.getByTitle('fa-bars');
    fireEvent.click(iTag);
    const isHorizontalBarsIconVisible = store.getState().horizontalBarsIconVisibilityReducer.isHorizontalBarsIconVisible;
    expect(isHorizontalBarsIconVisible).toBe(false);
})
test('clicking on links uses the navigate function',()=>{
    const isMobileDevice = false;
    setUpNavBar(isMobileDevice);   
    const homeLink = screen.getByText('Home');
    const portraitsLink = screen.getByText('Portraits');
    const aboutLink = screen.getByText('About');
    const cartLink = screen.getByTitle('cartNavLink');
    const signInLink = screen.getByTitle('signInIcon');
    fireEvent.click(portraitsLink);
    expect(mockedResetSearchFilters).toHaveBeenCalledTimes(0);
    fireEvent.click(homeLink);
    expect(mockedResetSearchFilters).toHaveBeenCalledTimes(1);
    fireEvent.click(aboutLink);
    expect(mockedResetSearchFilters).toHaveBeenCalledTimes(2);
    fireEvent.click(cartLink);
    expect(mockedResetSearchFilters).toHaveBeenCalledTimes(3);
    fireEvent.click(signInLink);
    expect(mockedResetSearchFilters).toHaveBeenCalledTimes(4);
})
test('navigate to HomePage when clicking store logo',()=>{
    const isMobileDevice = false;
    setUpNavBar(isMobileDevice);
    const logo = screen.getByTitle('logoNav');
    fireEvent.click(logo);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
})


