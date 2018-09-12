import {LOCAL_STORAGE_WRITE, LOCAL_STORAGE, LOCAL_STORAGE_READ} from '../const/LocalStorage';

export const  readItems  = () =>  (
    {
        [LOCAL_STORAGE]: {
            action: LOCAL_STORAGE_READ,
        }
    }
); 

export const  writeItems  = (items) =>  (
    {
        [LOCAL_STORAGE]: {
            action: LOCAL_STORAGE_WRITE,
            items: items
        }
    }
);
