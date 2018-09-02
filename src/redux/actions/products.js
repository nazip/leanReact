import * as types from '../const/actionTypes/products';
import {API_CALL} from '../const/APIcall';

export default () => {
  return {
    [API_CALL]: {
      endpoint: '/products',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_PRODUCTS_REQUEST,
        types.FETCH_PRODUCTS_SUCCESS,
        types.FETCH_PRODUCTS_FAILURE
      ]
    }
  };
}
