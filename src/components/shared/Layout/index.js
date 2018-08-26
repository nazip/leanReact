import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';

class Layout extends React.Component { 
    render() {
        return (    
        <Container>
            <Row>
                <Col><Header/></Col>
            </Row>
            <Row>
            <Col>
                {this.props.children}
            </Col>
            </Row>
            <Row>
                <Col><Footer/></Col>
            </Row>
        </Container>);
    }

};

export default Layout;