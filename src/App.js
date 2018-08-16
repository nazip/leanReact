import React from 'react';
import Basket from './Basket';
import Catalog from './Catalog';
import items  from './constants/Products';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {root, product, notFound } from './routes';
import RoutesWithSubRoutes from './routes/RoutesWithSubRoutes';

const routes = [root, product, notFound];

export default () => (
   <Router>
     <Switch>    
        {routes.map((route,i) => <RoutesWithSubRoutes key={i} {...route} /> )} 
        {/* <Route exact path='/' render={() => <Basket items={items}/>}/>   
        <Route render={() => <div>not found</div>}/>    */}
     </Switch>    
   </Router> 
);