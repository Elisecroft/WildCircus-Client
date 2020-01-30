import React, { useContext } from 'react'
import Ctx_User from '../../Ctx_User';
import './Performances.css';

const Performances = () => {

  const [user, setUser] = useContext(Ctx_User);

  // after we gonna retrieve the db infos
  const data = [{
    city: "Paris",
    date: "20/02",
    url: "https://editorial01.shutterstock.com/wm-preview-1500/10063338l/4f56da07/43rd-monte-carlo-circus-festival-photocall-monaco-shutterstock-editorial-10063338l.jpg",
    places: 28,
    price: 15,
  },
  {
    city: "London",
    date: "05/03",
    url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/39/5a.jpg",
    places: 13,
    price: 25.2,
  },
  {
    city: "Paris",
    date: "20/02",
    url: "https://editorial01.shutterstock.com/wm-preview-1500/10063338l/4f56da07/43rd-monte-carlo-circus-festival-photocall-monaco-shutterstock-editorial-10063338l.jpg",
    places: 28,
    price: 15,
  },];


  return (
    <div id="Performances">
      <h3>Performances</h3>
      <div className="container">
          <div className="row">
      {data.map((show) => {
        return <div className="col-md-4">
        <div className="card">
          <h5 className="card-title">{show.city} {show.date}</h5>
          <img className="card-img-top" src={show.url} alt="Card" />
          <div className="card-body">
            <p className="card-text">{show.places} left - {show.price}$</p>
            {user.email ? 
              <button type="button" className="btn custom-button">Reserved</button>
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
  )
}

export default Performances;