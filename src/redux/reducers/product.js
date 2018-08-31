import * as type from '../const/actionTypes/product';
const initalState = {item: null};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.FETCH_PRODUCT_REQUEST:
            return state;
        case type.FETCH_PRODUCT_SUCCESS:
            return Object.assign({}, state, {item: action.item});
        default: 
            return state;
    }
};

