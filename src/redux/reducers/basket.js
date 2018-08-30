import * as type from '../const/actionTypes/basket';
const initalState = {items: []};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.ADD_TO_BASKET_REQUEST:
            return state;
        case type.ADD_TO_BASKET_SUCCESS:
            return Object.assign({}, state, {items: action.items});
        case type.ADD_TO_BASKET_ERROR:
            return state;
        case type.REM_FROM_BASKET_REQUEST:
            return state;  
        case type.REM_FROM_BASKET_SUCCESS:
            return state;  
        case type.REM_FROM_BASKET_ERROR:
            return state;  
        default: return state;
    }
}