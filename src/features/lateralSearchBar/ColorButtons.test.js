import store from "../../app/store";
import { Provider } from "react-redux";
import {render, screen, fireEvent} from '@testing-library/react';
import { changeActiveColor } from "./activeColorSlice";
import ColorButtons from "./ColorButtons";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
...jest.requireActual('react-router'),
useNavigate: () => mockedUsedNavigate,
}));
const mockFn = jest.fn();
const mockedChangeActiveColorAndUrlColor = jest.fn();
jest.mock('../../commonFunctions', () => ({
...jest.requireActual('../../commonFunctions'),
changeActiveColorAndUrlColor: () => mockedChangeActiveColorAndUrlColor(),
}));
function setUpComponent(colorName){
    render(
        <Provider store={store}>
            <ColorButtons colorName={colorName}  minimizeLateralBar={mockFn} />
        </Provider>
    )
}

test('correct className assignment of the span tag',()=>{
    const activeColor = 'red';
    const colorName = 'blue';
    store.dispatch(changeActiveColor(activeColor));
    setUpComponent(colorName);
    const span = screen.getByTitle('colorSpan');
    expect(span).toHaveClass('colors ' + colorName)
})
describe('correct className assignment of the i tag',()=>{
    it('colorName === activeColor className should be fa fa-check',()=>{
        const activeColor = 'red';
        const colorName = activeColor;
        store.dispatch(changeActiveColor(activeColor));
        setUpComponent(colorName);
        const iTag = screen.getByTitle('checkedIcon');
        expect(iTag).toHaveClass('fa fa-check');
    })
    it('colorName !== activeColor className should not be fa fa-check',()=>{
        const activeColor = 'red';
        const colorName = 'blue';
        store.dispatch(changeActiveColor(activeColor));
        setUpComponent(colorName);
        const iTag = screen.getByTitle('checkedIcon');
        expect(iTag).not.toHaveClass('fa fa-check');
        expect([...iTag.classList]).toEqual([]);
    })
})
test('check correct behavior when clicking the component',()=>{
    const activeColor = 'red';
    const colorName = 'blue';
    store.dispatch(changeActiveColor(activeColor));
    setUpComponent(colorName);
    const span = screen.getByTitle('colorSpan');
    fireEvent.click(span);
    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockFn).toBeCalledTimes(1);
    expect(mockedChangeActiveColorAndUrlColor).toBeCalledTimes(1);
})