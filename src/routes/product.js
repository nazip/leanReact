import React from 'react';
import {product} from '../helpers/routes';
import ProductCard from '../ProductCard';
import items from '../constants/Products';

function getItem(id) {
    return items.filter((item) => item.id == id ? true : false)[0]
}

export default {
    path: product(),
    exact: true,
    render: () => (<ProductCard item={getItem(match.params.id)}/>)
};