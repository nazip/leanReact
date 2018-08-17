import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem, NavLink } from 'reactstrap';
// import NavLink  from './helpers/NavLink';  

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">учим React</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='/'>Главная</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/products'>Продукты</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/about'>О компании</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}