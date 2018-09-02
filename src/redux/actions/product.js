import * as types from '../const/actionTypes/product';
import {API_CALL} from '../const/APIcall';

export default (id) => {
  return {
    [API_CALL]: {
      endpoint: `/product/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_PRODUCT_REQUEST,
        types.FETCH_PRODUCT_SUCCESS,
        types.FETCH_PRODUCT_FAILURE
      ]
    }
  };
}

