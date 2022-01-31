import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
// import iconurl from

const WhatWeDo = () => {
  const CardDetails = [
    {
      id: 1,
      iconurl: "",
      Title: "DATA ENTRY SERVICES",
      description: [
        "Faster turnaround time with guaranteed quality",
        "99% error-free and affordable data entry",
        "Multiple data entry formats/Templates",
      ],
    },
    {
      id: 2,
      iconurl: "",
      Title: "SOFTWARE SERVICES",
      description: [
        "Customized software that delivers as promised",
        "Innovative software solutions for various sectors",
        "Mobile apps for iOS, Android & Windows",
      ],
    },
    {
      id: 3,
      iconurl: "",
      Title: "MORTGAGE SERVICES",
      description: [
        "Handling all types of mortgage support functions",
        "Specialized Title experts and Underwriters",
        "",
      ],
    },
    {
      id: 4,
      iconurl: "",
      Title: "Competitive pricing advantage",
      description: [
        "Title Plant Building",
        "Title Plant Maintenance",
        "Title Indexing",
      ],
    },
  ];
  return (
    <div>
      <div id="what-we-do" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <h3 className="pt-2 pb-2 text-center text-white">What we do</h3>
          <Row className="g-3">
            {CardDetails.map((item) => (
              <Col md={6} key={item.id}>
                <Card className="p-3 m-2">
                  <div className="text-center">
                    <i className="fas fa-users p-3 fs-1 bg-dark text-white rounded-circle"></i>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>
                      <ul className="list-unstyled">
                        {item.description.map((list, index) => (
                          <li key={index} className="lh-lg">{list}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhatWeDo;
