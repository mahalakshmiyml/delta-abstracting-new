import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const WhatWeDo = () => {
    return (
        <div>
            <div id="what-we-do">
        <Container>
          <Row>
            <Col className="p-5">
              <h1>What We Do</h1>
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
              <div className="text-start">
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

export default WhatWeDo
