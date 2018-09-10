import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem, NavLink } from 'reactstrap';
// import NavLink  from './helpers/NavLink';  
import {catalog, about, root, order} from '/src/helpers/routes';
import store from '/src/redux/store';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={root()}>учим React</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={root()}>Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={catalog()}>Продукты</NavLink>
              </NavItem>
              { !this.props.isBasketEmpty() && 
              <NavItem>
                <NavLink href={order()}>Оформить заказ</NavLink>
              </NavItem>
              }  
              <NavItem>
                <NavLink href={about()}>О компании</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}