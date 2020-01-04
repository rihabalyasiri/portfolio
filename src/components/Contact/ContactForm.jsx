import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div class="ui inverted segment bg">
      <div class="ui inverted form">
        <div class="two fields">
          <div class="field required">
            <label>Name</label>
            <input placeholder="First Name" type="text" />
          </div>
          <div class="field required">
            <label>E-Mail</label>
            <input placeholder="E-Mail" type="email" />
          </div>
          
        </div>
        <div class="field required">
            <label>Message</label>
            <textarea placeholder="Message..."  />
          </div>
       
        <div class="ui submit button">Submit</div>
      </div>
    </div>
  );
};

export default ContactForm;
