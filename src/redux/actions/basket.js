import * as types from '../const/actionTypes/basket';
import store from '../store';

const addItem = (item, n) =>  {
    let found = false;
    let items = store.getState().products.items.map((el) => {
        if(item.id == el.id) {
          found = true;  
          return Object.assign({}, el, {quantity: el.quantity+n});
        } else return el;
    });
    if(!found) items[items.length] = Object.assign({}, item, {quantity: n}); 
       
}; 