import React, { useState } from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import "./help.css";

import imageSrc from "./husky1.webp";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add code to handle form submission
  }

  return (
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 fancy-font">GET HELP HERE !</h1>
            <h1 className="display-4 mb-4 fancy-font marquee"><span>FILL OUT THE FORM BELOW TO SEND US A MESSAGE</span></h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          {/* <Col lg="5" className="mb-5">
            <p className="fancy-font">FILL OUT THE FORM BELOW TO SEND US A MESSAGE.</p>
          </Col> */}
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="help__form w-100">
              <Row>
                <Col lg="12" className="form-group d-flex align-items-center">
                <a href="https://www.northeastern.edu/">
                <img src={imageSrc} alt="Image" className="ml-auto mr-3" /></a>
                </Col>
                  <input
                    className="form-control rounded-0 fancy-font"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
              </Row>
              <Row>
                <Col lg="12" className="form-group d-flex align-items-center">
                  <input
                    className="form-control rounded-0 fancy-font"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="12" className="form-group d-flex align-items-center">
                  <textarea
                    className="form-control rounded-0 fancy-font"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn fancy-font" type="submit"> 
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}
