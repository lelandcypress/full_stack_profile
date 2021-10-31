import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Container from "react-bootstrap/Container";

import Card from "react-bootstrap/Card";

/*function Contact() {


 

  return (
    <div className="container">
      <div className="card responsive-width mx-2 p-4 my-5 border border-dark">
        <div>
          <h1>Contact</h1>
        </div>
        <form
          onSubmit={handleFormSubmit}
          action="https://formspree.io/f/xleaydnk"
          method="POST"
        >
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="mt-3">Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="contactEmail"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="mt-3">Message</label>
            <textarea
              name="message"
              rows="3"
              className="form-control mb-4"
              value={message}
              onChange={handleInputChange}
              required
            />
          </div>
         
        </form>
        
      </div>
    </div>
  );
}
export default Contact;*/

function Contact() {
  const [state, handleSubmit] = useForm("xleaydnk");
  if (state.succeeded) {
    return <p>Thank you for reaching out!</p>;
  }
  return (
    <Container>
      <Card className="responsive-width mx-2 p-4 my-5 border border-dark">
        <div>
          <h1>Contact</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="mt-3">Name</label>
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
            ></input>
          </div>
          <div className="form-group">
            <label className="mt-3" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label className="mt-3">Message</label>
            <textarea className="form-control" id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="btn btn-primary my-3"
            type="submit"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </Card>
    </Container>
  );
}
export default Contact;
