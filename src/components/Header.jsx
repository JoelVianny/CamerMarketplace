import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md"   variant="blue" className="navbar shadow-lg">
        <Container className="container flex flex-wrap items-center justify-between mx-auto">
        <Navbar.Brand href="#home" bg="text-black-50"><strong>Camer</strong>Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/" className="">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
