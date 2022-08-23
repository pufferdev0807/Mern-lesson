import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand>
            <Link to="/" className="nav-link">
                <Image src="/assets/images/logo.svg" width="176" alt="logo"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Link to="/" className="nav-link px-4">
                <Image src="/assets/images/cart.svg" width="32"/>
            </Link>
            <Link to="/" className="nav-link bg-primary-1 border rounded-2 text-white fs-5-2 fw-semibold px-4">Became a Local Expert</Link>
            <Link to="/login" className="nav-link fs-5-2 fw-semibold px-4 text-primary-1">Login</Link>
            <Link to="/register" className="nav-link bg-primary-1 border rounded-2 text-white fs-5-2 fw-semibold px-4">Sign up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
