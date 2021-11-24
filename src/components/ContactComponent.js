import React from "react";
import { Form, Button } from "react-bootstrap";
import "./ContactComponent.css";

function ContactComponent() {
  return (
    <div>
      <div className="contact-title">
        <h1>CONTACT</h1>
      </div>
      <div className="row contact-container">
        <div className="col-8 contact-slogan">
          <h1>IDK</h1>
          <h1>SOME</h1>
          <h1>ENCOURAGING</h1>
          <h1>WORDS</h1>
        </div>
        <Form className="col-4 form-bg">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactComponent;
