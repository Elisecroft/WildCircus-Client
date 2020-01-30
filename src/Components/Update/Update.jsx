import React, { useState } from 'react'
import axios from 'axios';
import './Update.css';

const Update = ({ location }) => {
  console.log(location)
  const { representation_id, city, date, price, photo } = location.state;

  const [form, setForm] = useState({
    city: city,
    date: date,
    price: price,
    photo: photo,
  });

  const submitForm = () => {
    console.log(form.date)
    axios.put(`http://localhost:8000/representations/${representation_id}`, {
      city: form.city,
      date: form.date,
      price: form.price,
      photo: form.photo,
    }).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="update">
      <h2>Administration</h2>
      <h3>Create Representation</h3>
      <div className="form-group">
        <label htmlFor="city">City *</label>
        <input type="city" className="form-control" id="city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date *</label>
        <input type="date" className="form-control" id="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price *</label>
        <input type="float" className="form-control" id="price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Image photo</label>
        <input type="photo" className="form-control" id="photo" value={form.photo} onChange={(e) => setForm({ ...form, photo: e.target.value })} required />
      </div>
      <button type="button" onClick={submitForm} className="btn custom-button">Submit</button>
    </div>
  )
};

export default Update;
