import React from 'react';
import { order } from '/src/helpers/routes';
import OrderForm from '/src/redux/containers/OrderForm';

export default {
    path: order(),
    exact: true,
    render:  () => (<OrderForm/>)
};