import * as type from '../const/actionTypes/basket';
import { addItem, delItem } from '../helpers';

const initalState = {items: [], 
    isOpen: false, 
    position: {left: 0, top: 0}};

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
        case type.ADD_TO_BASKET_FROM_LOCALSTORAGE:
            return Object.assign({}, state, {items: action.items});  
        case type.CLEAR_BASKET_SUCCESS:
            return Object.assign({}, state, {items: []});  
        case type.CHANGE_BASKET_STATE:
            return Object.assign({}, state, 
                {isOpen: !state.isOpen}, 
                {position: action.position}
            );  
        default: 
            return state; 
    }
}