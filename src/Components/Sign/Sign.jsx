import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Sign.css';

const Sign = () => {
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const submitForm = () => {
    setError(false);
    axios.post('http://localhost:8000/users', {
      email: form.email,
      password: form.password,
    }).then((result) => {
      if (result.status === 201) {
        setComplete(true);
      } 
    });
  };

  return (
    <div className="sign">
      {complete ?
        <>
          <h2>Sign to make reservation</h2>
          <Link to="/login">Nice, you can now your logging here</Link>
        </>
      :
        <>
          <h2>Sign to make reservation</h2>
          { error ? <p>Une erreur est survenue, veuillez réessayez</p> : null }
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </div>
          <button type="button" onClick={submitForm} className="btn custom-button">Submit</button>
        </>
      }
    </div>
  )
}

export default Sign;
