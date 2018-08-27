import * as type from '../const/actionTypes/products';
const initalState = {items: []};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.FETCH_PRODUCTS_REQUEST:
            return state;
        default: 
            return state;
    }
};

