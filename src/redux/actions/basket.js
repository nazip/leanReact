import * as types from '../const/actionTypes/basket';

export const  addItem = (item, n) =>  {
    alert('from additem');
    return {
        action: { 
            type: types.ADD_TO_BASKET_SUCCESS, 
            item: item,
              quantity: n
            }
    };
};

export const  delItem = (item, n) =>  {
    return {
        action: { 
              type: types.DELETE_FROM_BASKET_SUCCESS,
              item: item,
              quantity: n
            }
    };
}; 
