import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <h3>Contact Us</h3>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="btn custom-button">Submit</button>
    </div>
  );
};

export default Contact;
