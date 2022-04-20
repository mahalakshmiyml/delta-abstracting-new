import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../Images/logo.jpg";

const Menubar = () => {
  return (
    <div 
    className="shadow sticky-top border-bottom border-white">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="navbar"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#overview">Overview</Nav.Link>
              <Nav.Link href="#who-we-are">Who We are</Nav.Link>
              <Nav.Link href="#what-we-do">What we do</Nav.Link>
              {/* <Nav.Link href="#careers">Careers</Nav.Link> */}
              <Nav.Link href="#contact">Want To Join Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
