import React from 'react';
import {catalog} from '../helpers/routes';
import Basket from '../Basket';
import items from '../constants/Products';

export default {
    path: catalog(),
    exact: true,
    render: () => (<Basket items={items}/>)
};