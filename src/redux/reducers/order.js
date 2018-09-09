import * as type from '../const/actionTypes/order';
const initalState = {status: 'undefined'};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.POST_ORDER_REQUEST:
            return Object.assign(state, {status: 'request'});
        case type.POST_ORDER_SUCCESS:
            return Object.assign(state, {status: 'success'});
        case type.POST_ORDER_FAILURE:
            return Object.assign(state, {status: 'failure'});
        default: 
            return state;
    }
};
