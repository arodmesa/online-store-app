import store from "../../app/store";
import { Provider } from "react-redux";
import BackgroundForNavBar from "./BackgroundForNavBar";
import { changeHorizontalBarsIconVisibility } from "../navBar/horizontalBarsIconVisibilitySlice";
import {render, screen} from '@testing-library/react';

function setUpComponet(){
    render(
        <Provider store={store}>
            <BackgroundForNavBar />
        </Provider>
    )
}

describe('correct class assignment for simpleBackground div',()=>{
    it('className should be "simpleBackground" when isHorizontalBarsIconVisible is true',()=>{
        setUpComponet();
        store.dispatch(changeHorizontalBarsIconVisibility(true));
        const divSimpleBackground = screen.getByTitle('simpleBackground');
        expect(divSimpleBackground).toHaveClass('simpleBackground');
        expect(divSimpleBackground).not.toHaveClass('hideBackground');
    })
    it('className should be "simpleBackground hideBackground" when isHorizontalBarsIconVisible is false',()=>{
        setUpComponet();
        store.dispatch(changeHorizontalBarsIconVisibility(false));
        const divSimpleBackground = screen.getByTitle('simpleBackground');
        expect(divSimpleBackground).toHaveClass('simpleBackground hideBackground');
    })
})