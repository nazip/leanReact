import React from 'react';
import {Router, Switch} from 'react-router-dom';
import history from './history';
import {root, product, products, notFound, about, RoutesWithSubRoutes } from './routes';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';

const routes = [root, product, products, about, notFound];
// const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Container>
        <Row>
            <Col><Header/></Col>
        </Row>
        <Row>
          <Col>
            <Switch>
                {routes.map((route,i) => <RoutesWithSubRoutes key={i} {...route}/> )} 
            </Switch>    
          </Col>
        </Row>
        <Row>
            <Col>footer</Col>
        </Row>
    </Container>
  </Router>         
);