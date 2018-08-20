import React from 'react';
import {catalog} from '../helpers/routes';
import Basket from '../Basket';

export default {
    path: catalog(),
    exact: true,
    render: () => (<Basket/>)
};