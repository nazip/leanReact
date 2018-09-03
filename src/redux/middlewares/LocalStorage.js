import { LOCAL_STORAGE_READ, 
         LOCAL_STORAGE_SAVE,
         LOCAL_STORAGE_KEY
       }  from '../const/LocalStorage';

const saveToLocalStorage = (LOCAL_STORAGE_KEY, state) => {
    try {
      const serialState = JSON.stringify(state);
      localStorage.setItem(LOCAL_STORAGE_KEY, serialState);
      return true;
    } catch(e) {
      return false;
    }  
} 

const readFromLocalStorage = (key) => {
  try {
    const serialState = localStorage.getItem(key);
    return JSON.parse(serialState);
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

    const [requestType, successType, failureType] = [typeAction].types;
    next(nextAction(action, { type: requestType }));

    if(action[LOCAL_STORAGE_SAVE]) {
      if(saveToLocalStorage(action[LOCAL_STORAGE_CALL][LOCAL_STORAGE_KEY])) {
        next(nextAction(action, { response, type: successType }));
      } else {
        next(nextAction(action, { error, type: failureType }));
      } 

    } else {
      if(readFromLocalStorage([LOCAL_STORAGE_KEY])) {
        next(nextAction(action, { response, type: successType }));
      } else {
        next(nextAction(action, { error, type: failureType }));
      } 
    }
};
  