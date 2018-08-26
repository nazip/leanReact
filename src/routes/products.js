import React from 'react';
import {catalog} from '../helpers/routes';
import Basket from '/src/components/views/Basket';

export default {
    path: catalog(),
    exact: true,
    render: () => (<Basket/>)
};