import React from 'react';
import {catalog} from '../helpers/routes';
import Catalog from '/src/redux/containers/Catalog';

export default {
    path: catalog(),
    exact: true,
    render: () => (<Catalog/>)
};