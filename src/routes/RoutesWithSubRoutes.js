import {Route} from 'react-router-dom';
import React from 'react';

export default (route) => {
    // console.log('route=', route);
    return <Route 
        path={route.path}
        render={route.render}
        // render={ (props) => 
        //     (<route.component {...props}  routes={route.routes}/>)
        // }
    />;
}; 