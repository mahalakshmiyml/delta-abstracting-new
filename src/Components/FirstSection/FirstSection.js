import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FirstSection = () => {
  return (
    <div>
      <div id="overview" className="bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              {/* <div className="ratio ratio-16x9 mt-5">
                <iframe
                  src="https://video.wixstatic.com/video/9530b1_374efe2174414ead8a6cc608920f68d9/1080p/mp4/file.mp4"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div> */}
              <div className="">
                {/* <h3 className="text-white">Heading</h3> */}
                <p className="text-white">
                  Captivate is a high-quality outsourcing company based out of
                  Bengaluru, Karnataka. We have over 45 years of combined
                  experience in Business Process Outsourcing, Data Processes,
                  Mortgage and Title Services, Technology and Web Services, and
                  much more. Our goal is to provide our clients with accurate
                  information and research to complete data driven transactions.
                  We will accomplish our mission through innovative solutions,
                  systems, research, and people working together.
                </p>
              </div>
              <div className="text-center">
                <a
                  className="btn btn-primary p-2 mx-3"
                  href="#who-we-are"
                >
                  Read More
                </a>
                <a
                  className="btn btn-primary p-2"
                  href="#contact"
                >
                  Contact Us
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FirstSection;
