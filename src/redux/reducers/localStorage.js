import * as type from '../const/actionTypes/localStorage';
const initalState = {status: 'undefined'};

export default (state = initalState, action) => {
    switch(action.type) {
        case type.READ_FROM_LOCALSTORAGE:
            return Object.assign(state, {status: 'written'});
        case type.READ_FROM_LOCALSTORAGE:
            return Object.assign(state, {status: 'read'});
        default: 
            return state;
    }
};
