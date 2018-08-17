import React from 'react';
import {root} from '../helpers/routes';
import MainPage from '../MainPage';

export default {
    path: root(),
    exact: true,
    render: ({history}) => (<MainPage history={history}/>)
};