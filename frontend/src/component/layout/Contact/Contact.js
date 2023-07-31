import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:akshatkothavade1@gmail.com">
        <Button>Contact: akshatkothavade1@gmail.com</Button>
      </a>
      <div>OR</div>
      <a className="mailBtn" href="mailto:akshatkothavade1@gmail.com">
        <Button>Contact: lavitomar082@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
