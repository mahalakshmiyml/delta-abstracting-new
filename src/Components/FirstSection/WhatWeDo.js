import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
// import iconurl from

const WhatWeDo = () => {
  const CardDetails = [
<<<<<<< HEAD
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
=======
    {
      id: 1,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 2,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 3,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 4,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 5,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 6,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 7,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 8,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
      id: 9,
      iconurl: "",
      Title: "Heading",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
>>>>>>> e1895f98f6946e94b7b1c3377f40d149f53fa5f4
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
