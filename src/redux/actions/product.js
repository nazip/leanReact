import * as types from '../const/actionTypes/product';
import request from 'superagent';
import host from '/src/constants/Host';

const requstProduct = () => {
    return {
        type: types.FETCH_PRODUCT_REQUEST
    }
}

const errorProduct = (error) => {
    return {
        type: types.FETCH_PRODUCT_FAILURE,
        error
    }
}

const successProduct = (item) => {
    return {
        type: types.FETCH_PRODUCT_SUCCESS,
        item
    }
}

export const fetchProduct = (id) => {
    return (dispatch) => {
        dispatch(requstProduct());
        return request
        .get(`${host}/product/${id}`)
        .timeout({
            response: 5000,  
            deadline: 60000, 
        })
        .then(
            (res) => dispatch(successProduct(res.body)),
            (err) => {
                if(err.timeout) {
                    dispatch(errorProduct('timeout'))
                } else {     
                    dispatch(errorProduct(err.message))
                }
            }
        );
    } 
}

