import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
// import iconurl from

const WhatWeDo = () => {
  const CardDetails = [
    { id: 1, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 2, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 3, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 4, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 5, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 6, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 7, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 1, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 1, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
    { id: 1, iconurl: "", Title: "TITLE SEARCH", description: "Lorem" },
  ];
  return (
    <div>
      <div id="what-we-do" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            {CardDetails.map((item) => (
              <Col md={4} key={item.id}>
                <Card className="p-3">
                  <div className="text-center">
                    <i className="fas fa-users p-3 fs-1 bg-dark text-white rounded-circle"></i>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
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
