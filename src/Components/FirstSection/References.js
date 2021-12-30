import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const References = () => {
    return (
        <div>
            <div id="who-we-are">
        <Container>
          <Row>
            <Col className="text-end p-5">
              <h1>References</h1>
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
                <button
                  type="button"
                  class="btn btn-primary active p-2"
                  data-bs-toggle="button"
                  autocomplete="off"
                  aria-pressed="true"
                >
                  Who We Are
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        </div>
    )
}

export default References
