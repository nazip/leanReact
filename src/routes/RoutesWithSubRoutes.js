import {Route} from 'react-router-dom';
import React from 'react';

export default (route) => {
    return <Route
        {...route} 
        // path={route.path}
        // render={route.render}
        // render={ (props) => 
        //     (<route.component {...props}  routes={route.routes}/>)
        // }
    />;
}; 