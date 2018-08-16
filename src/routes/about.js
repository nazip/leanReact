import React from 'react';
import {about} from '../helpers/routes';
import About from '../About';

export default {
    path: about(),
    exact: true,
    render: () => <About/>
};