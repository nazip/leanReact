import * as types from '../const/actionTypes/basket';
import store from '../store';

const requestAdd = () => {
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

const successAdd = (items) => {
    return {
        type: types.ADD_TO_BASKET_SUCCESS,
        items
    }
}

const requestDelete = () => {
    return {
        type: types.DELETE_FROM_BASKET_REQUEST
    }
}

const errorDelete = (error) => {
    return {
        type: types.DELETE_FROM_BASKET_ERROR,
        error
    }
}

const successDelete = (items) => {
    return {
        type: types.DELETE_FROM_BASKET_SUCCESS,
        items
    }
}

export const  addItem = (dispatch, item, n) =>  {
    dispatch(requestAdd());
    try {
        let found = false;
        let items = store.getState().basket.items.map((el) => {
            if(item.id == el.id) {
            found = true;  
            return Object.assign({}, el, {quantity: el.quantity+n});
            } else return el;
        });
        if(!found) items[items.length] = Object.assign({}, item, {quantity: n}); 
        dispatch(successAdd(items));
    } catch (e) { 
        dispatch(errorAdd(e.message));  
    }    
} 

export const  delItem = (dispatch, item, n) =>  {
    dispatch(requestDelete());
    try {
        let items = store.getState().basket.items.map((el) => {
            if(item.id == el.id ) {
                return Object.assign({}, el, {quantity: el.quantity-n});
            } else return el;
        });    
        dispatch(successDelete(items.filter((item) => (item.quantity > 0))));
    } catch (e) {
        dispatch(errorDelete(e.message));  
    }
} 
