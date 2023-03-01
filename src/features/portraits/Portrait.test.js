import {render, screen, fireEvent} from '@testing-library/react';
import Portrait from './Portrait';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: () => mockedUsedNavigate,
}));
function setUpComponent (portraitID, price, tags, imagePreview, isResultsPage){
    render(
        <Portrait portraitID={portraitID} price={price} tags={tags} imagePreview={imagePreview} isResultsPage={isResultsPage} />
    )  
}
it ("checking the correct component renderization", ()=>{
    const portraitID = 1234;
    const price = 99;
    const tags = 'test';
    const imagePreview = 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg';
    const isResultsPage = true;
    setUpComponent(portraitID, price, tags, imagePreview, isResultsPage);
    expect(screen.getByText(`$${price}`)).toBeInTheDocument();
    expect(screen.getByText(tags)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
})
describe("check correct behavior of the variable asignation of classes",()=>{
    const portraitID = 1234;
    const price = 99;
    const tags = 'test';
    const imagePreview = 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg';
    it ("check if class imgResultsPage is the img element",()=>{
        const isResultsPage = true;
        setUpComponent(portraitID, price, tags, imagePreview, isResultsPage);
        const divElement = screen.getByTitle('divContainerText');
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveClass('imgResultsPage');
        expect(divElement).toHaveClass('tagsResultsPage');
    });
    it ("check if class imgResultsPage is not in the img element",()=>{
        const isResultsPage = false;
        setUpComponent(portraitID, price, tags, imagePreview, isResultsPage);
        const divElement = screen.getByTitle('divContainerText');
        const imgElement = screen.getByRole('img');
        expect(imgElement).not.toHaveClass('imgResultsPage');
        expect(divElement).not.toHaveClass('tagsResultsPage');
    });
})
it("check if clicking image redirects to desire url",()=>{
    const portraitID = 1234;
    const price = 99;
    const tags = 'test';
    const imagePreview = 'https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg';
    const isResultsPage = true;
    setUpComponent(portraitID, price, tags, imagePreview, isResultsPage);
    const imgElement = screen.getByRole('img'); 
    fireEvent.click(imgElement);
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
})