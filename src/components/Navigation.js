import React from "react";
import "./Navigation.css";
import "./responsive.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header">
      <Container className="w-100">
        <Navbar.Brand className="navbrand" href="/">
          <h2>Michael Souter</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to={"/about"}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to={"/projects"}>
              My Projects
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
