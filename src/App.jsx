import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home/Home';
import Ctx_User from './Ctx_User';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:8000/login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res, err) => {
        if (err) {
          console.log(err);
        }
        setUser(res.data);
        console.log(res.data, 'on app')
      });
    } else {
      setUser({});
    }
  }, []);

  return (
    <div className="App">
      <Ctx_User.Provider value={[user, setUser]} >
        <Switch>
          <Route to="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Ctx_User.Provider>
    </div>
  );
}

export default App;
