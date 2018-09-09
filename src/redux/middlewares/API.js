import request from 'superagent';
import { stringify } from 'qs';
import API_ROOT  from '/src/constants/Host';
import {API_CALL}  from '../const/APIcall';

function APICall({endpoint, method, query, payload}) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);
    if (query)
      r.query(stringify(query));
    if (payload) 
      r = r.send(payload);
    r.end((error, response) => (
      error ?
        reject(error)
      : resolve(response.body)
    ));
  });
}

const nextAction = (action, data) => (
  Object.assign({}, action, data, {[API_CALL]: undefined})
);

export default (store) => (next) => (action) => { 
  if (!action[API_CALL]) return next(action);
  const [requestType, successType, failureType] = action[API_CALL].types;
  next(nextAction(action, { type: requestType }));

  const promise = APICall(action[API_CALL]);

  promise.then(
    (response) => next(
      nextAction(action, { response, type: successType })
    ),
    (error) => next(
      nextAction(action, { error, type: failureType })
    )
  );

  return promise;
};
