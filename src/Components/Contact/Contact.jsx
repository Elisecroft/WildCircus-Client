import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <h3>Contact Us</h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="btn custom-button">Submit</button>
    </div>
  );
};

export default Contact;
