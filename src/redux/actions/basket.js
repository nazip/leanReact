import * as types from '../const/actionTypes/basket';
import store from '../store';
import {LOCAL_STORAGE_SAVE, LOCAL_STORAGE_DATA_KEY, LOCAL_STORAGE_READ} from '../const/LocalStorage';

export const  addItem = (item, n) =>  {
    let found = false;
    let items = store.getState().basket.items.map((el) => {
        if(item.id == el.id) {
        found = true;  
        return Object.assign({}, el, {quantity: el.quantity+n});
        } else return el;
    });
    if(!found) items[items.length] = Object.assign({}, item, {quantity: n}); 
    return {
        [LOCAL_STORAGE_SAVE]: {
           [LOCAL_STORAGE_DATA_KEY]: items,
           types: [
            types.ADD_TO_BASKET_REQUEST,
            types.ADD_TO_BASKET_SUCCESS,
            types.ADD_TO_BASKET_ERROR
          ] 
        }
    };
};

export const  delItem = (item, n) =>  {
    let items = store.getState().basket.items.map((el) => {
        if(item.id == el.id ) {
            if(el.quantity-n > 0) {
                return Object.assign({}, el, {quantity: el.quantity-n});
            }    
        } else return el;
    });
    items = items[0] == undefined ? [] : items;
    return {
        [LOCAL_STORAGE_SAVE]: {
            [LOCAL_STORAGE_DATA_KEY]: items,
            types: [
            types.DELETE_FROM_BASKET_REQUEST,
            types.DELETE_FROM_BASKET_SUCCESS,
            types.DELETE_FROM_BASKET_ERROR
            ] 
        }
    };
}; 

export const  readItems = () =>  (
    {
        [LOCAL_STORAGE_READ]: {
            types: [
            types.ADD_TO_BASKET_REQUEST,
            types.ADD_TO_BASKET_SUCCESS,
            types.ADD_TO_BASKET_ERROR
            ] 
        }
    }
); 

export const  deleteAllItems = () =>  (
    {
        [LOCAL_STORAGE_SAVE]: {
            [LOCAL_STORAGE_DATA_KEY]: [],
            types: [
            types.DELETE_FROM_BASKET_REQUEST,
            types.DELETE_FROM_BASKET_SUCCESS,
            types.DELETE_FROM_BASKET_ERROR
            ] 
        }
    }
);