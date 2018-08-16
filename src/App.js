import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {root, product, notFound, about, RoutesWithSubRoutes } from './routes';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header'; 

const routes = [root, product, about, notFound];

export default () => (
  <Container>
    <Row>
        <Col><Header/></Col>
    </Row>
    <Row>
        <Col>
          <Router>
            <Switch>    
              {routes.map((route,i) => <RoutesWithSubRoutes key={i} {...route} /> )} 
            </Switch>    
          </Router>         
        </Col>
    </Row>
    <Row>
    <   Col>footer</Col>
    </Row>
  </Container>
);