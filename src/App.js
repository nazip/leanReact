import React from 'react';
import {Router, Switch} from 'react-router-dom';
import history from './history';
import routes from './routes';
import RoutesWithSubRoutes from './routes/RoutesWithSubRoutes';
import Layout from '/src/components/shared/Layout';
import './css/app.css';
import {Provider} from 'react-redux';
import store from './redux/store';

console.log('store=', store.getState());

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Switch>
          {routes.map((route,i) => <RoutesWithSubRoutes key={i} {...route}/> )} 
        </Switch>
      </Layout>  
    </Router>         
  </Provider>
);
