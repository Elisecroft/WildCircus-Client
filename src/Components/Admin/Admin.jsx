import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [form, setForm] = useState({
    city: '',
    date: '2000-01-01',
    price: 0,
    photo: '',
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
      photo: form.photo,
    }).then((result) => {
      console.log(result);
      setDone(true);
    });
  };

  const deleteRepresentation = (representation_id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/representations/${representation_id}`)
      .then((result) => {
        console.log(result);
        setHidden(true);
      });
  }

  return (
    <div className="admin">
      <h2>Administration</h2>
      <h3>Create Representation</h3>
      {done ? <p>Representation add !</p> : null}
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
      <h3>All representations</h3>
      <div className="container">
        <div className="row">
      {data.map((show, index) => {
        return <div key={index} className="col-md-4">
          <div className="card">
            <h5 className="card-title">{show.city} {show.date}</h5>
            <img className="card-img-top" src={show.photo ? show.photo : 'https://images.ladepeche.fr/api/v1/images/view/5dad56bf3e4546733061f468/large/image.jpg?v=1'} alt="Card" />
            <div className="card-body">
              <p className="card-text">{show.price}$</p>
              <button type="button" className="btn custom-button"><Link to={{ pathname: `/representations/${show.id}`, state: { 
                representation_id: show.id,
                city: show.city,
                date: show.date,
                price: show.price,
                photo: show.photo,
            }}}>Update representation</Link></button>
              <button type="button" onClick={(e) => deleteRepresentation(show.id, e)} className="btn custom-button">Delete representation</button>
            </div>
          </div>
        </div>
        })}
      </div>
    </div>
  </div>
  )
};

export default Admin;
