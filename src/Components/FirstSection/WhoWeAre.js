import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhoWeAre = () => {
  return (
    <div>
      <div id="who-we-are">
        <Container>
          <Row>
            <Col className="text-center p-5">
              <h2>Who We Are</h2>
              <p>
                Captivate is a Business Process Outsourcing Company
                headquartered in Bengaluru, providing services in the areas of
                Outsourcing, Technology, Healthcare, and Web Design. We are
                primarily engaged in providing Mortgage and Technology services,
                Enterprise application development, Application software for the
                Financial Services industry and Business process outsourcing. We
                have multi-domain experts and have handled projects from various
                business sectors. Our main clients are large enterprises.
                However, we are flexible enough to work with Small Businesses as
                well.
              </p>
              <p>
                Our unique model delivers superior value and faster turnaround
                while measurably improving our client's business performance.
                Our Owners have over 45 years of combined experience in handling
                Title Insurance products.
              </p>
              <div className="text-center">
                <a
                  class="btn btn-primary active p-2"
                  href="#what-we-do"
                >
                  What We Do
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhoWeAre;
