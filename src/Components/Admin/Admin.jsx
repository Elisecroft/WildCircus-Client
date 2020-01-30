import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    city: null,
    date: null,
    price: null,
    availablePlaces: null,
    photo: null,
  });

  useEffect(() => {
    axios.get('http://localhost:8000/representations')
      .then((result) => {
        setData(result.data);
      })
  }, []);

  const submitForm = () => {
    console.log(form.date)
    axios.post('http://localhost:8000/representations', {
      city: form.city,
      date: form.date,
      price: form.price,
      availablePlaces: form.availablePlaces,
      photo: form.photo,
    }).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="admin">
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
        <label htmlFor="availablePlaces">Availables Places *</label>
        <input type="number" className="form-control" id="availablePlaces" value={form.availablePlaces} onChange={(e) => setForm({ ...form, availablePlaces: e.target.value })} required />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Image photo</label>
        <input type="photo" className="form-control" id="photo" value={form.photo} onChange={(e) => setForm({ ...form, photo: e.target.value })} required />
      </div>
      <button type="button" onClick={submitForm} className="btn custom-button">Submit</button>
      <h3>All representations</h3>
      {data.map((show) => {
          return <div className="col-md-4">
            <div className="card">
              <h5 className="card-title">{show.city} {show.date}</h5>
              <img className="card-img-top" src={show.photo ? show.photo : 'https://images.ladepeche.fr/api/v1/images/view/5dad56bf3e4546733061f468/large/image.jpg?v=1'} alt="Card" />
              <div className="card-body">
                <p className="card-text">{show.places} left - {show.price}$</p>
              </div>
            </div>
          </div>
        })}
    </div>
  )
};

export default Admin;
