import {combineReducers} from 'redux';
import products from './products';
import product from './product';
import basket from './basket';

export default combineReducers({
    products,
    product,  
    basket
});
