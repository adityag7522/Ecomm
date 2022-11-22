import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:popat12312312@gmail.com">
        <Button>Contact: aditya@gmail.com</Button>
        <Button>Contact: tarun@gmail.com</Button>
        <Button>Contact: shubham@gmail.com</Button>
        <Button>Contact: deepak@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
