import * as types from '../const/actionTypes/basket';

export const  addItem = (item, n) =>  {
    return {
            type: types.ADD_TO_BASKET_SUCCESS, 
            item: item,
            quantity: n
    };
};

export const  delItem = (item, n) =>  {
    return {
            type: types.DELETE_FROM_BASKET_SUCCESS,
            item: item,
            quantity: n
    };
}; 

export const clearBasket = () => {
    return {
        type: types.CLEAR_BASKET_SUCCESS
    };
}; 

export const changeBasketState = (position, isOpen) => {
    return {
        type: types.CHANGE_BASKET_STATE,
        position,
        isOpen
    };
}; 

