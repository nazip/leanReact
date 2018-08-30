import {combineReducers} from 'redux';
import products from './products';
import basket from './basket';

export default combineReducers({
    basket,
    products 
});
