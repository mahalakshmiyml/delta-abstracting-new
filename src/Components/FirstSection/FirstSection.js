import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FirstSection = () => {
  return (
    <div>
      <div id="first-section" className="pb-3 pb-mb-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="ratio ratio-4x3">
                <iframe
                  src="https://video.wixstatic.com/video/9530b1_374efe2174414ead8a6cc608920f68d9/1080p/mp4/file.mp4"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
              <h3>Heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor
                sit amet, consectetur adip Lorem ipsum dolor sit amet,
                consectetur adip Lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor
                sit amet, consectetur adip Lorem ipsum dolor sit amet,
                consectetur adip Lorem ipsum dolor sit amet, consectetur adip
                Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor
                sit amet, consectetur adip
              </p>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary p-2 mx-3"
                  data-bs-toggle="button"
                  autocomplete="off"
                >
                  Read More
                </button>
                <button
                  type="button"
                  className="btn btn-primary p-2"
                  data-bs-toggle="button"
                  autocomplete="off"
                  aria-pressed="true"
                >
                  Contact Us
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FirstSection;
