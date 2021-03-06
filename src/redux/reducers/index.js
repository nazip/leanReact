import {combineReducers} from 'redux';
import products from './products';
import product from './product';
import basket from './basket';
import order from './order';
import localStorage from './localStorage';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    products,
    product,  
    basket,
    order,
    localStorage,
    form: formReducer
});
