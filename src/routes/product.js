import React from 'react';
import {product} from '../helpers/routes';
import NotFound from '../NotFound';
import ProductCard from '../ProductCard';
import items from '../constants/Products';

function getItem(id) {
    return items.filter((item) => item.id == id ? true : false)[0]
}

export default {
    path: product(),
    exact: true,
    render:  ({match: {params}}) => (
        getItem(params.id) ? (<ProductCard item={getItem(params.id)}/>) : (<NotFound/>)
    )
};