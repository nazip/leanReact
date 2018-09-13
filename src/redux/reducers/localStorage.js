import * as type from '../const/actionTypes/localStorage';
const initalState = {items: []};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.READ_FROM_LOCALSTORAGE:
            return Object.assign({}, state, {status: 'read'});
        case type.WRITE_TO_LOCALSTORAGE:
            return Object.assign({}, state, {status: 'write'});
        default: 
            return state;
    }
};
