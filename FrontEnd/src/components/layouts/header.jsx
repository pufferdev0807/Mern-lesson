import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="py-3">
      <Container className="justify-content-between">
        <Navbar.Brand>
            <Link to="/" className="nav-link">
                <Image src="/assets/images/logo.svg" width="176" alt="logo"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center">
          <OverlayTrigger  placement="bottom" overlay={<Popover id={`popover-positioned-bottom`} className="px-2 border-color-primary text-primary-1">Shopping Cart</Popover>}>
            <Link to="/" className="nav-link px-4 py-1 mx-2 secondary-btn">
                <Image src="/assets/images/cart.svg" width="32"/>
            </Link>
            </OverlayTrigger>

            <Link to="/" className="nav-link bg-primary-1 border rounded-2 text-white fs-5-2 fw-semibold px-4 mx-2 primary-btn">Became a Local Expert</Link>
            <Link to="/login" className="nav-link fs-5-2 fw-semibold px-4 mx-2 text-primary-1 secondary-btn">Login</Link>
            <Link to="/register" className="nav-link bg-primary-1 border rounded-2 text-white fs-5-2 fw-semibold px-4 mx-2 primary-btn">Sign up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
