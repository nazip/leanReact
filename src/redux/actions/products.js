import * as types from '../const/actionTypes/products';
import {dispatch} from 'redux';
import request from 'superagent';
import host from '/src/constants/Host';

const requstProducts = () => {
    return {
        type: types.FETCH_PRODUCTS_REQUEST
    }
}

const errorProducts = (error) => {
    return {
        type: types.FETCH_PRODUCTS_FAILURE,
        error
    }
}

const successProducts = (items) => {
    return {
        type: types.FETCH_PRODUCTS_SUCCESS,
        items
    }
}

export const fetchProducts = () => {
    dispatch(requstProducts());
    request
    .get(`${host}/products`)
    .timeout({
        response: 10000,  
        deadline: 60000, 
    })
    .then(
        (res) => this.setState({items:res.body}),
    (err) => {
        if(err.timeout) {
            dispatch(errorProducts('timeout'))
        } else {     
            dispatch(errorProducts(error))
        }
    }) 
}