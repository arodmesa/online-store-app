import store from "../../app/store";
import { handlePageButtonCliked } from "./pagingFunctionalities";
import { changeAmountOfResultsPages } from "./amountOfResultsPagesSlice";
import { changeCurrentPageNumber } from "./currentPageNumberSlice";

const mockedUsedNavigate = jest.fn();
test('clicked different page number than current', ()=>{
    const currentPage = 10;
    const amountOfResultsPages = 16;
    const clickedPage = amountOfResultsPages - 1;
    store.dispatch(changeCurrentPageNumber(currentPage));
    store.dispatch(changeAmountOfResultsPages(amountOfResultsPages));
    handlePageButtonCliked(mockedUsedNavigate, clickedPage);
    expect(mockedUsedNavigate).toBeCalledTimes(1);
})
test('check function when the amountOfResultsPages is 0', ()=>{
    const currentPage = 1;
    const amountOfResultsPages = 0;
    const clickedPage = currentPage + 1;
    store.dispatch(changeCurrentPageNumber(currentPage));
    store.dispatch(changeAmountOfResultsPages(amountOfResultsPages));
    handlePageButtonCliked(mockedUsedNavigate, clickedPage);
    expect(mockedUsedNavigate).toBeCalledTimes(0);
})
test('clicked same page number than current', ()=>{
    const currentPage = store.getState().currentPageNumberReducer.currentPageNumber;
    const clickedPage = currentPage;
    handlePageButtonCliked(mockedUsedNavigate, clickedPage);
    expect(mockedUsedNavigate).toBeCalledTimes(0);
})