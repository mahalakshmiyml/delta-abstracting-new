import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const References = () => {
  return (
    <div>
      <div id="careers" className="">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center">
                {/* <h1>DISCOVER YOUR POTENTIAL!!!</h1>
                <p>
                  Captivate is a dynamic and growing company with exciting
                  career opportunities at our campuses in the Bengaluru. Read
                  more about our company, benefits, values and commitment to
                  diversity, then click Apply Now to see if any of our available
                  positions are a good match to your skills and experience.
                </p>
                <p>
                  Captivate firmly believes that when talented employees from
                  varied backgrounds are engaged to contribute to the company's
                  success, higher levels of performance result from diverse
                  teams addressing challenges and opportunities together.
                </p> */}
                <p>
                  EMAIL YOUR RESUMES TO 
                  <a className="text-dark text-decoration-none" href="mailto:hr@captivatebusinessservices.com">
                  @captivatebusinessservices.com</a>
                </p>
              </div>

              {/* <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Question</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Question</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default References;
