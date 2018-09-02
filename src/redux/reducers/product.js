import * as type from '../const/actionTypes/product';
const initalState = {item: null};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.FETCH_PRODUCT_REQUEST:
            return state;
        case type.FETCH_PRODUCT_SUCCESS:
            return Object.assign({}, state, {item: action.response, error: undefined});
        case type.FETCH_PRODUCT_FAILURE:
            return Object.assign({}, state, {item: null, error: action.error});
        default: 
            return state;
    }
};

