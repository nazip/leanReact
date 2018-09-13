import * as type from '../const/LocalStorage';

export const  readItems  = () =>  {
    return {
        [type.LOCAL_STORAGE]: {
            action: type.LOCAL_STORAGE_READ,
        }
    };
}; 

export const  addItemToLocalStorage  = (item,n) =>  {
    return {
        [type.LOCAL_STORAGE]: {
            action: type.ADD_TO_LOCAL_STORAGE,
            item: item,
            quantity: n 
        }
    };
};

export const  removeItemFromLocalStorage  = (item,n) =>  {
    return {
        [type.LOCAL_STORAGE]: {
            action: type.REMOVE_FROM_LOCAL_STORAGE,
            item: item,
            quantity: n 
        }
    };
};
