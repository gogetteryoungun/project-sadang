import React, { Component } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar className="Header">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Dashboard</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
