import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhoWeAre = () => {
  return (
    <div>
      <div id="who-we-are">
        <Container>
          <Row>
            <Col className="text-end p-5">
              <h1>Who We Are</h1>
              <p>
                Lorem Ipsum is Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem
                Ipsum is Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem Ipsum is
                Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem Ipsum is Lorem
                Ipsum Lorem Ipsum is Lorem Ipsum Lorem Ipsum is Lorem Ipsum
                Lorem Ipsum is Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem
                Ipsum is Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem Ipsum is
                Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem Ipsum is Lorem
                Ipsum
              </p>
              <div className="text-end">
                <button
                  type="button"
                  class="btn btn-primary active p-2"
                  data-bs-toggle="button"
                  autocomplete="off"
                  aria-pressed="true"
                >
                  What We Do
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhoWeAre;
