import store from "../../app/store";
import { Provider } from "react-redux";
import CategoryButtons from "./CategoryButtons";
import {render, screen, fireEvent} from '@testing-library/react';
import { changeActiveCategory } from "./activeCategorySlice";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router', () => ({
...jest.requireActual('react-router'),
useNavigate: () => mockedUsedNavigate,
}));
const mockFn = jest.fn();
const mockedChangeActiveCategoryAndUrlCategory = jest.fn();
jest.mock('../../commonFunctions', () => ({
...jest.requireActual('../../commonFunctions'),
changeActiveCategoryAndUrlCategory: () => mockedChangeActiveCategoryAndUrlCategory(),
}));
function setUpComponent(categoryName){
    render(
        <Provider store={store}>
            <CategoryButtons categoryName={categoryName}  minimizeLateralBar={mockFn} />
        </Provider>
    )
}

describe('testing the two posibilities for className of the h4 tag of the component',()=>{
    it('className = "category checked" when categoryName === activeCategoryName',()=>{
        const activeCategory = 'nature';
        store.dispatch(changeActiveCategory(activeCategory));
        setUpComponent(activeCategory);
        const h4Tag = screen.getByTitle('categoryH4');
        expect(h4Tag).toBeInTheDocument();
        expect(h4Tag).toHaveClass('category checked');
    })
    it('className = "category" when categoryName !== activeCategoryName',()=>{
        const activeCategory = 'nature';
        const categoryName = 'science'
        store.dispatch(changeActiveCategory(activeCategory));
        setUpComponent(categoryName);
        const h4Tag = screen.getByTitle('categoryH4');
        expect(h4Tag).toBeInTheDocument();
        expect(h4Tag).toHaveClass('category');
        expect(h4Tag).not.toHaveClass('checked');
    })
})
test('check correct behavior when clicking the component',()=>{
    const activeCategory = 'nature';
    const categoryName = 'science'
    store.dispatch(changeActiveCategory(activeCategory));
    setUpComponent(categoryName);
    const h4Tag = screen.getByTitle('categoryH4');
    fireEvent.click(h4Tag);
    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockFn).toBeCalledTimes(1);
    expect(mockedChangeActiveCategoryAndUrlCategory).toBeCalledTimes(1);
})
