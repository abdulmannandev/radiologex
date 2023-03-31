import React from "react";
import { Link } from "react-router-dom";

import container from "react-bootstrap/container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {
  const { menuItems } = props;

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menuItems.map((menuItem) => (
                <>
                  {menuItem.dropdown ? (
                    <NavDropdown title={menuItem.label} id="basic-nav-dropdown">
                      {menuItem.dropdown.map((dropdownItem) => (
                        // <NavDropdown.Divider />
                        <NavDropdown.Item
                          as={Link}
                          key={dropdownItem.id}
                          to={dropdownItem.url}
                        >
                          {dropdownItem.label}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <li className="nav-item" key={menuItem.id}>
                      <Link className="nav-link" to={menuItem.url}>
                        {menuItem.label}
                      </Link>
                    </li>
                  )}
                  {menuItem.isButton && (
                    <li key={menuItem.id} className="nav-item">
                      <Link
                        to={menuItem.url}
                        className="btn btn-primary"
                        role="button"
                      >
                        {menuItem.label}
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </Nav>
          </Navbar.Collapse>
        </container>
      </Navbar>
    </header>
  );
}

export default Header;
