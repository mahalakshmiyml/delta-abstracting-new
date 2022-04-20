import React from "react";
import { Row, Form, Col, Container, Button } from "react-bootstrap";
import UseForm from "./ContactFrom/UseForm";
import Validation from "./ContactFrom/Validation";

const Contact = () => {
  const { handleChange, values, handleSubmit, errors, mailStatus } =
    UseForm(Validation);

  return (
    <div>
      <div id="contact" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={7}>
              <div className="bg-white p-3 rounded shadow">
                <h3 className="text-center py-3">Contact Us</h3>
                <p className="text-center">
                  EMAIL YOUR RESUMES TO  
                  <a className="text-dark text-decoration-none ms-2" href="mailto:hr@captivatebusinessservices.com">
                   hr@captivatebusinessservices.com</a>
                </p>
                {/* <p>
                  If you have any query or want to leave a comment about our
                  products & services, drop a message or fill the form below.
                </p> */}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="pb-5">
                        <Form.Control
                          id="name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="Name*"
                        />
                        {errors.name && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          type="email"
                          placeholder="Email*"
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          type="text"
                          placeholder="Phone*"
                        />
                        {errors.phone && (
                          <small className="text-danger">{errors.phone}</small>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="pb-5" controlId="formBasicEmail">
                        <Form.Control
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          type="text"
                          placeholder="Subject*"
                        />
                        {errors.subject && (
                          <small className="text-danger">
                            {errors.subject}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group
                        className="pb-5"
                        controlId="exampleForm.ControlTextarea1 "
                      >
                        <Form.Control
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          as="textarea"
                          placeholder="Message*"
                          rows={8}
                        />
                        {errors.message && (
                          <small className="text-danger">
                            {errors.message}
                          </small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div id="mail-status">
                        {mailStatus ? (
                          <p className="alert alert-success p-3 text-center">
                            {mailStatus}{" "}
                          </p>
                        ) : null}
                      </div>
                      <div className="text-center">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div id="info" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={3}>
              <div className="text-center bg-white">
                <h3>Hours</h3>
                <p>Monday - Friday: 9AM - 5PM</p>
                <p>Saturday & Sunday Closed</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center bg-white">
                <h3>Loaction</h3>
                <p>Address</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center bg-white">
                <h3>Send Message</h3>
                <p>Phone No</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center bg-white">
                <h3>Social Connect</h3>
                <p>Phone No</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
    </div>
  );
};

export default Contact;
