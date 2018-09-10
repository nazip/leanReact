import * as types from '../const/actionTypes/order';
import {API_CALL} from '../const/APIcall';

export default (payload) => {
  return {
    [API_CALL]: {
      endpoint: '/order',
      method: 'POST',
      query: {},
      payload: payload, 
      types: [
        types.POST_ORDER_REQUEST,
        types.POST_ORDER_SUCCESS,
        types.POST_ORDER_FAILURE
      ]
    }
  };
}
