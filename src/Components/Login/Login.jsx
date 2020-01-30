import React, { useState, useContext } from 'react'
import axios from 'axios';
import Ctx_User from '../../Ctx_User';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useContext(Ctx_User);

  const submitForm = () => {
    axios.post('http://localhost:8000/login', {
      email: form.email,
      password: form.password,
    }).then((result) => {
      console.log(result);
      setUser(result.data.result);
      localStorage.setItem('token', result.data.accessToken);
    });
  };

  return (
    <div className="login">
      <h2>Login to see your reservations and more</h2>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      </div>
      <button type="button" onClick={submitForm} className="btn custom-button">Submit</button>
    </div>
  )
}

export default Login;
