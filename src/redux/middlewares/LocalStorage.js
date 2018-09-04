import { LOCAL_STORAGE_READ, 
         LOCAL_STORAGE_SAVE,
         LOCAL_STORAGE_DATA_KEY
       }  from '../const/LocalStorage';

const saveToLocalStorage = (key, state) => {
  try {
      const serialState = JSON.stringify(state);
      localStorage.setItem(key, serialState);
      return true;
    } catch(e) {
      return false;
    }  
} 

const readFromLocalStorage = (key) => {
  try {
    const serialState = localStorage.getItem(key);
    return serialState ? JSON.parse(serialState) : [];
  } catch(e) {
    return [];
  }  
} 

const nextAction = (action, data) => (
    Object.assign({}, action, data, 
      {[LOCAL_STORAGE_READ]: undefined},
      {[LOCAL_STORAGE_SAVE]: undefined},
    )
);

export default (store) => (next) => (action) => { 
  if (!action[LOCAL_STORAGE_READ] && !action[LOCAL_STORAGE_SAVE]) return next(action);
    const typeAction = action[LOCAL_STORAGE_READ] ? action[LOCAL_STORAGE_READ] : action[LOCAL_STORAGE_SAVE];  
    const [requestType, successType, failureType] = typeAction.types;
    next(nextAction(action, { type: requestType }));

    if(action[LOCAL_STORAGE_SAVE]) {
      const state = action[LOCAL_STORAGE_SAVE][LOCAL_STORAGE_DATA_KEY];
      if(saveToLocalStorage(LOCAL_STORAGE_DATA_KEY, state)) {
        next(nextAction(action, { response: state, type: successType }));
      } else {
        next(nextAction(action, { error: 'error', type: failureType }));
      } 
    } else {
      next(nextAction(action, { response: readFromLocalStorage(LOCAL_STORAGE_DATA_KEY), 
                                type: successType }));
    }
};
  