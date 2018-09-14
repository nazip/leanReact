import { ADD_TO_BASKET_FROM_LOCALSTORAGE, 
         WRITE_TO_LOCALSTORAGE } from '../const/actionTypes/basket';       
import { LOCAL_STORAGE, 
         ADD_TO_LOCAL_STORAGE,
         LOCAL_STORAGE_CLEAR,
         LOCAL_STORAGE_READ, 
         REMOVE_FROM_LOCAL_STORAGE } from '../const/LocalStorage';
import { addItem, delItem } from '../helpers';

const saveToLocalStorage = (key, items) => {
  try 
    {
      localStorage.clear();
      if(items.length != 0) { 
        const serialState = JSON.stringify(items);
        localStorage.setItem(key, serialState);
      }
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
    Object.assign({}, action, {[LOCAL_STORAGE]: undefined});

    const { item, quantity } = action[LOCAL_STORAGE];
    let items = readFromLocalStorage(LOCAL_STORAGE);

    switch(typeAction) {
      case ADD_TO_LOCAL_STORAGE:
        items = addItem(items, item, quantity);
        break;
      case REMOVE_FROM_LOCAL_STORAGE:
        items = delItem(items, item, quantity);
        break;
      case LOCAL_STORAGE_CLEAR: 
        items = [];
        break;
      case LOCAL_STORAGE_READ:
        next({type: ADD_TO_BASKET_FROM_LOCALSTORAGE, 
              items: readFromLocalStorage(LOCAL_STORAGE)
             });
        return;       
    }

    saveToLocalStorage(LOCAL_STORAGE, items) 
    next({type: WRITE_TO_LOCALSTORAGE});
}; 
  