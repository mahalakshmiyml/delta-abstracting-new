import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="bg-dark pt-3 pb-3 pt-md-5 pb-md-5" id="footer">
        <Container>
          <Row>
            <Col md={6}>
              <div className="text-start ">
                
                <h3 className="text-uppercase text-primary pt-2 pb-2">Delta Abstracting</h3>
  
                <address>
                  <p className="text-white">
                  4445 Corporation Ln. STE 264 Virginia Beach, VA 23462
                  2093 Philadelphia Pike 4656 Claymont, DE 19703
                    <br />
                    <a href="tel:09513636036">Contact: 1888-610-3132</a>
                    <br />
                    <a href="mailto:business@shanthasdesigns.com">
                      Email: business@shanthaswebz.com
                    </a>
                  </p>
                </address>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-end">
                <h3 className="text-primary pt-2 pb-2">INFORMATION</h3>
                <ul>
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
    )
}

export default Footer
