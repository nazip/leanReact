import * as type from '../const/actionTypes/basket';
const initalState = {items: []};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.ADD_TO_BASKET:
          return Object.assign({}, state, {items: action.items});
        case type.REM_FROM_BASKET:
          return state;  
        default: return state;
    }
}