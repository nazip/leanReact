import React from 'react';
import {product} from '../helpers/routes';
import ProductCard from '../ProductCard';

export default {
    path: product(),
    exact: true,
    render:  ({match: {params}}) => (<ProductCard id={params.id}/>)
};