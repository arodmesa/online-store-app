import store from "../../app/store";
import { Provider } from "react-redux";
import CartTableRow from "./CartTableRow";
import {render, screen, fireEvent} from '@testing-library/react';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: () => mockedUsedNavigate,
}));
function setUpComponent(portraitID, price, image, name, amount, subtotal){
    render(
        <Provider store={store}>
            <CartTableRow portraitID={portraitID} price={price} 
                          image={image} name={name} amount={amount} 
                          subtotal={subtotal} 
            />
        </Provider>
    )
}

test('correct component render',()=>{
    const portraitID = 1;
    const price = 25;
    const image = 'https://imagecolorpicker.com/imagecolorpicker.png';
    const name = 'car';
    const amount = 1;
    const subtotal = price * amount;
    setUpComponent(portraitID, price, image, name, amount, subtotal);
    expect(screen.getByTitle('h4Price')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTitle('h4Name')).toBeInTheDocument();
    expect(screen.getByTitle('h4Amount')).toBeInTheDocument();
    expect(screen.getByTitle('h4Subtotal')).toBeInTheDocument();
})