import * as type from '../const/actionTypes/products';
const initalState = {items: []};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.FETCH_PRODUCTS_REQUEST:
            return state;
        case type.FETCH_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {items: action.items});
        default: 
            return state;
    }
};

