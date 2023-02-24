import fetchData from './fetchData';
import { apiURL } from '../../constants';

test('check if the api request is fullfilled', () => {
    return fetchData(apiURL).then(data => {
      expect(data.total).toBeDefined();
    });
});
test('check if api throw a correct error when apiKey is wrong',()=>{
    return fetchData('https://pixabay.com/api/?key=26').then(data => {
        expect(data.customError).toBeDefined();
    });
})