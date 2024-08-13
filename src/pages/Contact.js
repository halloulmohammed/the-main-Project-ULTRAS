import React from "react";
import "../style/contact.css";
export const Contact = () => {
  return (
    <div className="contact-box">
      <p>
        for any question or problem you face please contact US by sending A
        message in this box.
      </p>
      <div id="sending-box">
        <div id="emailBox">
          <label type="email" value="Email">
            Email:
          </label>
          <input type="email" placeholder="enter your email" />
        </div>
        <div id="comments">
          
          <textarea placeholder="write here..."></textarea>
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};
