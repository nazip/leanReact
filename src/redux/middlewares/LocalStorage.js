import { ADD_TO_BASKET_FROM_LOCALSTORAGE, 
         WRITE_TO_LOCALSTORAGE } from '../const/actionTypes/basket';       
import { LOCAL_STORAGE, 
         ADD_TO_LOCAL_STORAGE, 
         REMOVE_FROM_LOCAL_STORAGE } from '../const/LocalStorage';
import { addItem, delItem } from '../helpers';

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
    Object.assign({}, action, {[LOCAL_STORAGE]: undefined});
    if((typeAction == ADD_TO_LOCAL_STORAGE) ||
       (typeAction == REMOVE_FROM_LOCAL_STORAGE)) {
      
      const { item, quantity } = action[LOCAL_STORAGE];

      let items = readFromLocalStorage(LOCAL_STORAGE);
      if(typeAction == ADD_TO_LOCAL_STORAGE) {
        items = addItem(items, item, quantity);
      } else {
        items = delItem(items, item, quantity);
      }  

      saveToLocalStorage(LOCAL_STORAGE, items) 
      next({type: WRITE_TO_LOCALSTORAGE});

    } else {
      next({type: ADD_TO_BASKET_FROM_LOCALSTORAGE, 
        items: readFromLocalStorage(LOCAL_STORAGE)
      });
    }

};
  