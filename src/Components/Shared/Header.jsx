import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
// import container from "react-bootstrap/container";
import { ReactComponent as HeaderLogo } from "./../../assets/logo-header.svg";
// import { ReactComponent as AngleDown } from "./../../assets/icon-downangle.svg";

import "./Header.scss";

function trimLeadingSlash(string) {
  return string.slice(1);
}

function getLastPartOfUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

function Header(props) {
  const location = useLocation();
  const [currentView, setCurrentView] = React.useState("");
  const { menuItems } = props;

  React.useEffect(() => {
    setCurrentView(getLastPartOfUrl(trimLeadingSlash(location.pathname)));
  }, [location]);

  return (
    <header>
      <Navbar className="py-3" variant="dark" expand="md">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <HeaderLogo />
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-two`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-two`}
            aria-labelledby={`offcanvasNavbarLabel-expand-two`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-two`}>
                <HeaderLogo />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
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
                      <>
                        {menuItem.isButton ? (
                          <li key={menuItem.id} className="nav-item">
                            <Link
                              to={menuItem.url}
                              className="btn btn-secondary"
                              role="button"
                            >
                              {menuItem.label}
                            </Link>
                          </li>
                        ) : (
                          <li
                            className={`nav-item ${
                              menuItem.id === currentView ||
                              (currentView === "" && menuItem.url === "/")
                                ? "active"
                                : ""
                            }`}
                            key={menuItem.id}
                          >
                            <Link className="nav-link" to={menuItem.url}>
                              {menuItem.label}
                            </Link>

                            {/* <NavLink to={menuItem.url} activeClassName="active">
                              {menuItem.label}
                            </NavLink> */}
                          </li>
                        )}
                      </>
                    )}
                  </>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
