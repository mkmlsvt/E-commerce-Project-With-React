import React, { Component } from 'react'
import reactDom from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from "react-router-dom"

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Navi</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="form2">form demo 2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form1">form demo 1</Link>
                </NavLink>
              </NavItem>
              <NavItem  >
                <NavLink href="#">GitHub</NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
            </Nav  >
          </Collapse>
        </Navbar>
      </div>
    );

  }
}