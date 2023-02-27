/* eslint-disable import/first */
const mockedUsedNavigate = jest.fn();
const mockedHandlePageButtonCliked = jest.fn();
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: () => mockedUsedNavigate,
}));
jest.mock('./pagingFunctionalities', () => ({
    ...jest.requireActual('./pagingFunctionalities'),
    handlePageButtonCliked:  ()=>mockedHandlePageButtonCliked(),
}));
import Page from './Page';
import {render, screen, fireEvent} from '@testing-library/react';

test('correct page visualization',()=>{
    render(<Page pageNumber={1} startingPageNumberBtn={1} />)
    const divElement = screen.getByTitle('pageDiv');
    expect(divElement).toBeInTheDocument();
    expect(divElement).not.toHaveClass('noDisplay');
})
describe('checking if the className "noDisplay" is present or not in the div',()=>{
    it('div should have className "noDisplay" when is less than the starting page number',()=>{
        render(<Page pageNumber={1} startingPageNumberBtn={3} />)
        const divElement = screen.getByTitle('pageDiv');
        expect(divElement).toHaveClass('noDisplay');
    })
    it('div should have className "noDisplay" when is bigger than the startingPageNumber + 4',()=>{
        render(<Page pageNumber={8} startingPageNumberBtn={3} />)
        const divElement = screen.getByTitle('pageDiv');
        expect(divElement).toHaveClass('noDisplay');
    })
    it('div should not have className "noDisplay" when is equal than the startingPageNumber + 4',()=>{
        render(<Page pageNumber={3 + 4} startingPageNumberBtn={3} />)
        const divElement = screen.getByTitle('pageDiv');
        expect(divElement).not.toHaveClass('noDisplay');
    })
})
test('check the clicking in div event', ()=>{
    render(<Page pageNumber={1} startingPageNumberBtn={1} />)
    const divElement = screen.getByTitle('pageDiv');
    fireEvent.click(divElement);
    expect(mockedHandlePageButtonCliked).toHaveBeenCalledTimes(1);
})