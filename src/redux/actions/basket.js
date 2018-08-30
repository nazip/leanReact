import * as types from '../const/actionTypes/basket';
import store from '../store';

const requstAdd = () => {
    return {
        type: types.ADD_TO_BASKET_REQUEST
    }
}

const errorAdd = (error) => {
    return {
        type: types.ADD_TO_BASKET_ERROR,
        error
    }
}

const successAdd = (item) => {
    return {
        type: types.ADD_TO_BASKET_SUCCESS,
        item
    }
}

export default  addItem = (item, n) =>  {
    return (dipatch) => {
        dispatch(requstAdd());
        try {
            let found = false;
            let items = store.getState().products.items.map((el) => {
                if(item.id == el.id) {
                found = true;  
                return Object.assign({}, el, {quantity: el.quantity+n});
                } else return el;
            });
            if(!found) items[items.length] = Object.assign({}, item, {quantity: n}); 
            dispatch(successAdd())
        } catch {
            dispatch(errorAdd('error'));  
        }    
    };
}; 
