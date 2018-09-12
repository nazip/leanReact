import { LOCAL_STORAGE_READ, 
         LOCAL_STORAGE_WRITE,
         LOCAL_STORAGE
       }  from '../const/LocalStorage';
import * as type from '../const/actionTypes/basket';       

const saveToLocalStorage = (key, items) => {
  try 
    {
      localStorage.clear();
      const serialState = JSON.stringify(items);
      localStorage.setItem(key, serialState);
      return true;
    } catch(e) {
      return false;
    }  
} 

const readFromLocalStorage = (key) => {
  try {
    const serialState = localStorage.getItem(key);
    if(serialState==null) return [];
    return JSON.parse(serialState);
  } catch(e) {
    return [];
  }  
} 

export default (store) => (next) => (action) => { 
  if (!action[LOCAL_STORAGE]) return next(action);
    const typeAction = action[LOCAL_STORAGE].action;
    const items = action[LOCAL_STORAGE].items;  
    Object.assign({}, action, {[LOCAL_STORAGE]: undefined});

    if(typeAction == LOCAL_STORAGE_WRITE) {
      console.log('write to local storage');
      saveToLocalStorage(LOCAL_STORAGE, items) 
    } else {
      console.log('read from local storage');
      readFromLocalStorage(LOCAL_STORAGE) 
    }
};
  