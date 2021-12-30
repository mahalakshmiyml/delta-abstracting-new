import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";

const Menubar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar" >
        <Container>
          <Navbar.Brand href="#home">Delta Abstracting Services</Navbar.Brand>
        
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-primary" href="#junction ">Junction</Nav.Link>
              <Nav.Link className="text-info" href="#who-we-are">Who We are</Nav.Link>
              <Nav.Link className="text-primary"href="#what-we-do">What we do</Nav.Link>
              <Nav.Link className="text-info"href="#references">References</Nav.Link>              
              <Nav.Link className="text-primary" href="#want-to-join-us">Want To Join Us</Nav.Link>
              <Nav.Link className="text-info"href="#we-cover">We Cover</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;
