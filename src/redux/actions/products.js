import * as types from '../const/actionTypes/products';

export const requstProducts = () => {
    return {
        type: types.FETCH_PRODUCTS_REQUEST
    }
}

export const errorProducts = () => {
    return {
        type: types.FETCH_PRODUCTS_FAILURE
    }
}

export const successProducts = () => {
    return {
        type: types.FETCH_PRODUCTS_SUCCESS
    }
}
