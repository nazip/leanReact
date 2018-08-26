import React from 'react';
import {root} from '../helpers/routes';
import MainPage from '/src/components/views/MainPage';

export default {
    path: root(),
    exact: true,
    render: ({history}) => (<MainPage history={history}/>)
};