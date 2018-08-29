import React from 'react';
import {catalog} from '../helpers/routes';
import Basket from '/src/components/views/Basket';
import Catalog from '/src/redux/containters/Catalog';

export default {
    path: catalog(),
    exact: true,
    render: () => (<Catalog/>)
};