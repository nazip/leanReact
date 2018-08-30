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

const successAdd = (items) => {
    return {
        type: types.ADD_TO_BASKET_SUCCESS,
        items
    }
}

const requstDel = () => {
    return {
        type: types.REM_FROM_BASKET_REQUEST
    }
}

const errorDel = (error) => {
    return {
        type: types.REM_FROM_BASKET_ERROR,
        error
    }
}

const successDel = (items) => {
    return {
        type: types.REM_FROM_BASKET_SUCCESS,
        items
    }
}

export const  addItem = (item, n) =>  {
    return (dispatch) => {
        console.log('action!!!!!!!');
        // dispatch(requstAdd());
        // try {
        //     let found = false;
        //     let items = store.getState().basket.items.map((el) => {
        //         if(item.id == el.id) {
        //         found = true;  
        //         return Object.assign({}, el, {quantity: el.quantity+n});
        //         } else return el;
        //     });
        //     if(!found) items[items.length] = Object.assign({}, item, {quantity: n}); 
        //     dispatch(successAdd(items));
        // } catch (e) {
        //     dispatch(errorAdd('error'));  
        // }    
    }
} 

export const  delItem = (item, n) =>  {
    return (dispatch) => {
        dispatch(requstDel());
        try {
            let items = store.getState().basket.items.map((el) => {
                if(item.id == el.id ) {
                    return Object.assign({}, el, {quantity: el.quantity-n});
                } else return el;
            });    
            dispatch(successDel(items.filter((item) => (item.quantity > 0))));
        } catch (e) {
            dispatch(errorAdd('error'));  
        }
    }
} 
