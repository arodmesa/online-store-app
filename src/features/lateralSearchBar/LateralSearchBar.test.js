import { Provider } from "react-redux";
import Router from 'react-router';
import store from "../../app/store";
import LateralSearchBar from "./LateralSearchBar";
import { changeSearchInputText } from "./searchInputTextSlice";
import { changeActiveColor } from "./activeColorSlice";
import { render, screen, fireEvent} from '@testing-library/react';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: () => mockedUsedNavigate,
    useParams: ()=>jest.fn()
}));
const mockedResetLoadedPortraitsProcess = jest.fn();
const mockedGetData = jest.fn();
const mockedResetSearchFilters = jest.fn();
const mockedChangeActiveColorAndUrlColor = jest.fn();
const mockedNavigateToPageOne = jest.fn();
jest.mock('../../commonFunctions', () => ({
    ...jest.requireActual('../../commonFunctions'),
    resetLoadedPortraitsProcess: () => mockedResetLoadedPortraitsProcess(),
    getData: () => mockedGetData(),
    resetSearchFilters: ()=>mockedResetSearchFilters(),
    changeActiveColorAndUrlColor: ()=>mockedChangeActiveColorAndUrlColor(),
    navigateToPageOne: ()=>mockedNavigateToPageOne()
}));
function setUpComponent(isDesktopDevice, pageNumber = '1'){
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: !isDesktopDevice,
          media: query,
          onchange: null,
        })),
    });
    jest.spyOn(Router, 'useParams').mockReturnValue({ page: pageNumber });
    render(
        <Provider store={store}>
            <LateralSearchBar />
        </Provider>
    )
}

describe('check display of correct content',()=>{
    it('display right arrow icon and dont display lateralBar by default when is not desktopDevice',()=>{
        const isDesktopDevice = false;
        setUpComponent(isDesktopDevice);
        const iTagArrowRight = screen.getByTitle('rightArrow');
        expect(iTagArrowRight).toBeInTheDocument();
        expect(() => screen.getByTitle('lateralBar')).toThrow();
    })
    it('display left arrow icon and lateralBar by default when is desktopDevice',()=>{
        const isDesktopDevice = true;
        setUpComponent(isDesktopDevice);
        const iTagArrowLeft = screen.getByTitle('leftArrow');
        const lateralBar = screen.getByTitle('lateralBar');
        expect(iTagArrowLeft).toBeInTheDocument();
        expect(lateralBar).toBeInTheDocument();
        expect(() => screen.getByTitle('rightArrow')).toThrow();
    })
})

describe('checking handleSearchButtonClick function in component',()=>{
    const setUpSimilarTestsPage = (pageNumber)=>{
        const isDesktopDevice = true;
        setUpComponent(isDesktopDevice, pageNumber);
        store.dispatch(changeSearchInputText('testInput'));            
    }
    describe('checkin event when clicking in search icon',()=>{
        it('checking execution of mockResetLoadedPortraitsProcess, changeSearchTextURL and mockedUsedNavigate when pageNumber!=="1"', ()=>{
            const pageNumber = '2';
            setUpSimilarTestsPage(pageNumber);
            const searchIcon = screen.getByTitle('searchIcon');
            fireEvent.click(searchIcon);
            const searchInputText = store.getState().searchInputTextReducer.inputText;
            expect(mockedResetLoadedPortraitsProcess).toBeCalledTimes(1);            
            expect(searchInputText).toBe('testInput');
            expect(mockedUsedNavigate).toBeCalledTimes(1);
        })
        it('checking execution of mockResetLoadedPortraitsProcess, changeSearchTextURL and mockedUsedNavigate when pageNumber==="1"',()=>{
            const pageNumber = '1';
            setUpSimilarTestsPage(pageNumber);          
            const searchIcon = screen.getByTitle('searchIcon');
            fireEvent.click(searchIcon);
            const searchInputText = store.getState().searchInputTextReducer.inputText;
            expect(mockedResetLoadedPortraitsProcess).toBeCalledTimes(1);            
            expect(searchInputText).toBe('testInput');
            expect(mockedGetData).toBeCalledTimes(1);
        })
    })
    describe('checkin event when pressing Enter',()=>{
        it('checking execution of mockResetLoadedPortraitsProcess, changeSearchTextURL and mockedUsedNavigate when pageNumber!=="1"', ()=>{
            const pageNumber = '2';
            setUpSimilarTestsPage(pageNumber);
            const textInput = screen.getByTitle('textInput');
            fireEvent.keyDown(textInput, {key: 'Enter', code: 'Enter', charCode: 13});
            const searchInputText = store.getState().searchInputTextReducer.inputText;
            expect(mockedResetLoadedPortraitsProcess).toBeCalledTimes(1);            
            expect(searchInputText).toBe('testInput');
            expect(mockedUsedNavigate).toBeCalledTimes(1);
        })
        it('checking execution of mockResetLoadedPortraitsProcess, changeSearchTextURL and mockedUsedNavigate when pageNumber==="1"',()=>{
            const pageNumber = '1';
            setUpSimilarTestsPage(pageNumber);          
            const textInput = screen.getByTitle('textInput');
            fireEvent.keyDown(textInput, {key: 'Enter', code: 'Enter', charCode: 13});
            const searchInputText = store.getState().searchInputTextReducer.inputText;
            expect(mockedResetLoadedPortraitsProcess).toBeCalledTimes(1);            
            expect(searchInputText).toBe('testInput');
            expect(mockedGetData).toBeCalledTimes(1);
        })
    })
    
})
describe('checking minimizeLateralBar function in component',()=>{
    it('check correct bar minimization when clicking the search icon when is DesktopDevice',()=>{
        const isDesktopDevice = false;
        setUpComponent(isDesktopDevice);
        let iTagArrowRight = screen.getByTitle('rightArrow');
        fireEvent.click(iTagArrowRight);
        const lateralBar = screen.getByTitle('lateralBar');
        const iTagArrowLeft = screen.getByTitle('leftArrow');
        expect(lateralBar).toBeInTheDocument();
        expect(iTagArrowLeft).toBeInTheDocument();
        expect(() => screen.getByTitle('rightArrow')).toThrow();
        const searchIcon = screen.getByTitle('searchIcon');
        fireEvent.click(searchIcon);
        iTagArrowRight = screen.getByTitle('rightArrow');
        expect(iTagArrowRight).toBeInTheDocument();
        expect(() => screen.getByTitle('leftArrow')).toThrow();
        expect(() => screen.getByTitle('lateralBar')).toThrow();
    })
    it('check nothing happens when is not DesktopDevice',()=>{
        const isDesktopDevice = true;
        setUpComponent(isDesktopDevice);
        const searchIcon = screen.getByTitle('searchIcon');
        fireEvent.click(searchIcon);
        const lateralBar = screen.getByTitle('lateralBar');
        expect(lateralBar).toBeInTheDocument();
    })
})
test('check the lateralBar minimization or not when clicking the arrow icons', ()=>{
    const isDesktopDevice = false;
    setUpComponent(isDesktopDevice);
    let iTagArrowRight = screen.getByTitle('rightArrow');
    fireEvent.click(iTagArrowRight);
    const lateralBar = screen.getByTitle('lateralBar');
    const iTagArrowLeft = screen.getByTitle('leftArrow');
    expect(lateralBar).toBeInTheDocument();
    expect(iTagArrowLeft).toBeInTheDocument();
    expect(() => screen.getByTitle('rightArrow')).toThrow();
    fireEvent.click(iTagArrowLeft);
    iTagArrowRight = screen.getByTitle('rightArrow');
    expect(iTagArrowRight).toBeInTheDocument();
    expect(() => screen.getByTitle('leftArrow')).toThrow();
    expect(() => screen.getByTitle('lateralBar')).toThrow();
})
test('check correct state modification when typing in the inputText searchBar',()=>{
    const isDesktopDevice = true;
    setUpComponent(isDesktopDevice);
    store.dispatch(changeSearchInputText(''));
    let searchInputText = store.getState().searchInputTextReducer.inputText;
    expect(searchInputText).toBe('');
    const inputTextTag = screen.getByTitle('textInput');
    fireEvent.change(inputTextTag, {target: {value: 'woman'}});
    searchInputText = store.getState().searchInputTextReducer.inputText;
    expect(searchInputText).toBe('woman');
})
test('correct display of all CategoryButtons and ColorButtons components',()=>{
    const isDesktopDevice = true;
    setUpComponent(isDesktopDevice);
    const arrayOfCategoryButtons = screen.getAllByTitle('categoryH4');
    const arrayOfColorButtons = screen.getAllByTitle('colorSpan');
    expect(arrayOfCategoryButtons.length).toBe(21);
    expect(arrayOfColorButtons.length).toBe(14);
})
test('correct behavior of clearButton',()=>{
    const isDesktopDevice = true;
    setUpComponent(isDesktopDevice);
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    expect(mockedResetSearchFilters).toBeCalledTimes(1);
})
test('check correct className assignment in allH4Tag',()=>{
    const isDesktopDevice = true;
    setUpComponent(isDesktopDevice);
    store.dispatch(changeActiveColor('all'));
    let allH4Tag = screen.getByTitle('allH4Tag');
    expect(allH4Tag).toHaveClass('h4Category h4Checked');
    store.dispatch(changeActiveColor('red'));
    allH4Tag = screen.getByTitle('allH4Tag');
    expect(allH4Tag).toHaveClass('h4Category');
    expect(allH4Tag).not.toHaveClass('h4Checked');
})