import React from 'react';
import {about} from '../helpers/routes';
import About from '~/src/components/views/About';

export default {
    path: about(),
    exact: true,
    render: () => <About/>
};