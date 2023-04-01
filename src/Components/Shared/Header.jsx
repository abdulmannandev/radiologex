import React from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import container from "react-bootstrap/container";
import { ReactComponent as HeaderLogo } from "./../../assets/logo-header.svg";
// import { ReactComponent as AngleDown } from "./../../assets/icon-downangle.svg";

import "./Header.scss";

function Header(props) {
  const { menuItems } = props;

  return (
    <header>
      <Navbar variant="dark" expand="lg">
        <div className="container">
          <Navbar.Brand href="#home">
            <HeaderLogo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuItems.map((menuItem, index) => (
                <>
                  {menuItem.dropdown ? (
                    <NavDropdown
                      title={menuItem.label}
                      key={index}
                      id="basic-nav-dropdown"
                    >
                      {menuItem.dropdown.map((dropdownItem, index) => (
                        // <NavDropdown.Divider />
                        <NavDropdown.Item
                          as={Link}
                          key={index}
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
                        className="btn btn-secondary"
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
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
