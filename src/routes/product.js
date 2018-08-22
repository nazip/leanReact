import React from 'react';
import {product} from '../helpers/routes';
import ProductCardExt from '../ProductCardExt';

export default {
    path: product(),
    exact: true,
    render:  ({match: {params}}) => (<ProductCardExt id={params.id}/>)
};