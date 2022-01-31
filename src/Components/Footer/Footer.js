import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import logo from "../../Images/logo.png"

const Footer = () => {
  return (
    <div className="bg-dark pt-3 pb-3 pt-md-5 pb-md-5" id="footer">
      <Container>
        <Row>
          <Col md={3}>
            <div className="text-start ">
              <h5 className="text-uppercase text-primary pt-2 pb-2">
                Captivate Business Services
              </h5>

              <address>
                <p className="text-white">
                  Address
                  <br />
                  <a>Contact: 8888-888-8888</a>
                  <br />
                  <a>
                    Email: business@comapny.com
                  </a>
                </p>
              </address>
            </div>
          </Col>
          <Col md={6} className="align-self-center">
            <div className="text-center">
              <Image src={logo} alt="" className="img-fluid" />  
            </div> 
          </Col>
          <Col md={3}>
            <div className="text-end">
              <h5 className="text-primary pt-2 pb-2">INFORMATION</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Junction</a>
                </li>
                <li>
                  <a href="/what_we_do">What We Do </a>
                </li>
                <li>
                  <a href="/references">References</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
