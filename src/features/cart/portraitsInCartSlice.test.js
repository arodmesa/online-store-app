import store from "../../app/store";
import { addPortraitToCart, removePortraitFromCart, incrementAmountOfOnePortraitInCart, decrementAmountOfOnePortraitInCart, clearShoppingCart } from "./portraitsInCartSlice";

const previewURL = 'https://imagecolorpicker.com/imagecolorpicker.png';
const tags = 'car desert';
function createDataToAdd(id, price){
    return({
        id,
        webformatHeight: price,
        previewURL,
        tags
    })
}
test('check correct slice initialization',()=>{
    const portraitsInCart = store.getState().portraitsInCartReducer.portraitsInCart;
    expect(portraitsInCart).toEqual({});
})
describe('check correct behavior of addPortraitToCart',()=>{
    const portraitID1 = 1;
    const price1 = 25;
    const defaultAmountOfPortraitsToAddCart1 = 2;
    it("adding first portrait's data to cart",()=>{
        const portraitData1 = createDataToAdd(portraitID1, price1);
        store.dispatch(addPortraitToCart({
            portraitDetails: portraitData1, defaultAmountOfPortraitsToAddCart: defaultAmountOfPortraitsToAddCart1
        }));
        const portraitsInCart = store.getState().portraitsInCartReducer.portraitsInCart;
        expect(portraitsInCart).toEqual({
            [portraitID1]:{
                price: price1,
                image: previewURL,
                name: tags,
                amount: defaultAmountOfPortraitsToAddCart1,
                subtotal: price1*defaultAmountOfPortraitsToAddCart1
            }
        });
    })
    const portraitID2 = 2;
    const price2 = 10;
    const defaultAmountOfPortraitsToAddCart2 = 4;
    it("adding secong portrait to cart",()=>{
        const portraitData2 = createDataToAdd(portraitID2, price2);
        store.dispatch(addPortraitToCart({
            portraitDetails: portraitData2, defaultAmountOfPortraitsToAddCart: defaultAmountOfPortraitsToAddCart2
        }));
        const portraitsInCart = store.getState().portraitsInCartReducer.portraitsInCart;
        expect(portraitsInCart).toEqual({
            [portraitID1]:{
                price: price1,
                image: previewURL,
                name: tags,
                amount: defaultAmountOfPortraitsToAddCart1,
                subtotal: price1*defaultAmountOfPortraitsToAddCart1
            },
            [portraitID2]:{
                price: price2,
                image: previewURL,
                name: tags,
                amount: defaultAmountOfPortraitsToAddCart2,
                subtotal: price2*defaultAmountOfPortraitsToAddCart2
            }
        });
    })
    const portraitID3 = 1;
    const price3 = 25;
    const defaultAmountOfPortraitsToAddCart3 = 3;
    it('check behavior when another amount of the same portrait is added',()=>{
        const portraitData3 = createDataToAdd(portraitID3, price3);
        store.dispatch(addPortraitToCart({
            portraitDetails: portraitData3, defaultAmountOfPortraitsToAddCart: defaultAmountOfPortraitsToAddCart3
        }));
        const portraitsInCart = store.getState().portraitsInCartReducer.portraitsInCart;
        expect(portraitsInCart).toEqual({
            [portraitID1]:{
                price: price1,
                image: previewURL,
                name: tags,
                amount: defaultAmountOfPortraitsToAddCart1 + defaultAmountOfPortraitsToAddCart3,
                subtotal: price1*(defaultAmountOfPortraitsToAddCart1 + defaultAmountOfPortraitsToAddCart3)
            },
            [portraitID2]:{
                price: price2,
                image: previewURL,
                name: tags,
                amount: defaultAmountOfPortraitsToAddCart2,
                subtotal: price2*defaultAmountOfPortraitsToAddCart2
            }
        });
    })
})