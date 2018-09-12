import * as type from '../const/actionTypes/basket';
import { writeItems } from '~/src/redux/actions/localStorage';

const initalState = {items: []};

const delItem = (basketItems, item, quantity) =>  {
    let items = basketItems.map((el) => {
        if(item.id == el.id ) {
            if(el.quantity-quantity > 0) {
                return Object.assign({}, el, {quantity: el.quantity-quantity});
            }    
        } else return el;
    });
    items = items[0] == undefined ? [] : items;
    return items;
}

const addItem = (basketItems, item, quantity) => {
    let found = false;
    let items = basketItems.map((el) => {
        if(item.id == el.id) {
        found = true;  
        return Object.assign({}, el, {quantity: el.quantity+quantity});
        } else return el;
    });
    if(!found) 
        items[items.length] = Object.assign({}, item, {quantity: quantity}); 
    return items;
}

export default (state = initalState, action) => {
    switch(action.type) {
        case type.ADD_TO_BASKET_REQUEST:
            return state;
        case type.ADD_TO_BASKET_SUCCESS:
            return Object.assign({}, state, 
                {items: addItem(state.items, action.item, action.quantity)});  
        case type.ADD_TO_BASKET_ERROR:
            return Object.assign({}, state, {error: action.error});
        case type.DELETE_FROM_BASKET_REQUEST:
            return state;  
        case type.DELETE_FROM_BASKET_SUCCESS:
            return Object.assign({}, state, 
                {items: delItem(state.items, action.item, action.quantity)});  
        case type.DELETE_FROM_BASKET_ERROR:
            return Object.assign({}, state, {error: action.error});
        default: return state; 
    }
}