import React from 'react';
import {product} from '~/src/helpers/routes';
import Product from '~/src/redux/containers/Product';

export default {
    path: product(),
    exact: true,
    render:  ({match: {params}}) => (<Product id={params.id}/>)
};