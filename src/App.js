import React from 'react';
import {Router, Switch} from 'react-router-dom';
import history from './history';
import {root, product, products, notFound, about, RoutesWithSubRoutes} from './routes';
import Layout from './Layout';
import './css/app.css';

const routes = [root, product, products, about, notFound];
// const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Layout>
      <Switch>
        {routes.map((route,i) => <RoutesWithSubRoutes key={i} {...route}/> )} 
      </Switch>
    </Layout>  
  </Router>         
);
