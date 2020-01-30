import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Ctx_User from '../../Ctx_User';

const Panel = () => {
  const [user, setUser] = useContext(Ctx_User);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/reservations/${user.id}`)
    .then((result) => {
      console.log(result.data);
      setReservations(result.data);
    });
  }, []);

  const cancelReservation = (reservation_id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/reservations/${reservation_id}`)
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <div>
      <h3>Welcome {user.email}</h3>
      <h4>Your reservations</h4>
      { reservations.length > 0 ?
        reservations.map(reservation => {
          return <div className="col-md-4">
            <div className="card">
              <h5 className="card-title">{reservation.city} {reservation.date}</h5>
              <img className="card-img-top" src={reservation.url ? reservation.url : 'https://images.ladepeche.fr/api/v1/images/view/5dad56bf3e4546733061f468/large/image.jpg?v=1'} alt="Card" />
              <div className="card-body">
                <p className="card-text">{reservation.places} places reserved - Total {reservation.price * reservation.places}$</p>
                <button type="button" className="btn custom-button" onClick={(e) => cancelReservation(reservation.reservation_id, e)}>Cancel reservation</button>
              </div>
            </div>
          </div>
        })
        :
      <p>You haven't any reservations yet</p>
      }
    </div>
  )
}

export default Panel;
