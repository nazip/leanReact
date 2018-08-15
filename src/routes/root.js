import React from 'react';
import {root} from '../helpers/routes';
import Basket from '../Basket';
import items from '../constants/Products';

export default {
    path: root(),
    exact: true,
    render: () => (<Basket items={items}/>)
};