import * as type from '../const/actionTypes/basket';
import Basket from '../containers/Basket';
const initalState = {items: []};

const delItem = (basketItems, item, n) =>  {
    let items = basketItems.map((el) => {
        if(item.id == el.id ) {
            if(el.quantity-n > 0) {
                return Object.assign({}, el, {quantity: el.quantity-n});
            }    
        } else return el;
    });
    items = items[0] == undefined ? [] : items;
    return items;
}

const addItem = (basketItems, item, n) => {
    return [];
    let found = false;
    let items = basketItems.map((el) => {
        if(item.id == el.id) {
        found = true;  
        return Object.assign({}, el, {quantity: el.quantity+n});
        } else return el;
    });
    if(!found) items[items.length] = Object.assign({}, item, {quantity: n}); 
    return items;
}

export default (state = initalState, action) => {
    switch(action.type) {
        case type.ADD_TO_BASKET_REQUEST:
            return state;
        case type.ADD_TO_BASKET_SUCCESS:
            return Object.assign({}, state, 
                {items: addItem(state.Basket,items, item, quantity)});
        case type.ADD_TO_BASKET_ERROR:
            alert('reducer basket');
            const {item, quantity} = action; 
            return Object.assign({}, state, {error: action.error});
        case type.DELETE_FROM_BASKET_REQUEST:
            return state;  
        case type.DELETE_FROM_BASKET_SUCCESS:
            return Object.assign({}, state, 
                {items: delItem(state.Basket,items, item, quantity)});  
        case type.DELETE_FROM_BASKET_ERROR:
            return Object.assign({}, state, {error: action.error});
        default: return state; 
    }
}