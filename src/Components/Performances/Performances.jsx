import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import Ctx_User from '../../Ctx_User';
import './Performances.css';

const Performances = () => {

  const [user] = useContext(Ctx_User);
  const [data, setData] = useState([]);
  const [places, setPlaces] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/representations')
      .then((result) => {
        setData(result.data);
      })
  }, []);

  const reservedPlace = (representation_id, e) => {
    e.preventDefault();
    console.log(representation_id);
    axios.post('http://localhost:8000/reservations', {user_id: user.id, representation_id, places })
      .then((result) => {
        console.log(result);
      });
  }


  return (
    <div id="Performances">
      <h3>Performances</h3>
      <div className="container">
        <div className="row">
        {data.map((show, index) => {
          return <div key={index} className="col-md-4">
            <div className="card">
              <h5 className="card-title">{show.city} {show.date}</h5>
              <img className="card-img-top" src={show.photo ? show.photo : 'https://images.ladepeche.fr/api/v1/images/view/5dad56bf3e4546733061f468/large/image.jpg?v=1'} alt="Card" />
              <div className="card-body">
                <p className="card-text">{show.places} left - {show.price}$</p>
                {user.email ? 
                  <>
                    <input type="number" min="1" max="15" onClick={(e) => setPlaces(e.target.value)} />
                    <button type="button" className="btn custom-button" onClick={(e) => reservedPlace(show.id, e)}>Reserved</button>
                  </>
                :
                  <p>You need to be logged to reserved your places</p>
                }
              </div>
            </div>
          </div>
        })}
        </div>
      </div>
    </div>
  );
};

export default Performances;
