import React from 'react';
import Basket from './Basket';
import Catalog from './Catalog';
import items  from './constants/Products';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import root from './routes/root';
import product from './routes/product';
import RoutesWithSubRoutes from './routes/RoutesWithSubRoutes';

const routes = [root, product];

export default () => (
   <Router>
     <Switch>    
        {routes.map((route,i) => <RoutesWithSubRoutes key={i} {...route} /> )} 
        {/* <Route exact path='/' render={() => <Basket items={items}/>}/>   
        <Route render={() => <div>not found</div>}/>    */}
     </Switch>    
   </Router> 
);