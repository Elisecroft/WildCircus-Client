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

  return (
    <div>
      <h3>Welcome {user.email}</h3>
      { reservations.length > 0 ?
      <p>Vos reservations</p>
        :
      <p>Vous n'avez aucunes réservations</p>
      }
    </div>
  )
}

export default Panel;
