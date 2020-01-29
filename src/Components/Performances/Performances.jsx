import React from 'react'
import './Performances.css';

const Performances = () => {

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
  }];


  return (
    <div>
      <h3>Performances</h3>
      {data.map((show) => {
        return <div className="card">
          <h5 className="card-title">{show.city} {show.date}</h5>
          <img className="card-img-top" src={show.url} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">{show.places} left - {show.price}$</p>
            <a href="#" className="btn btn-primary">Reserved</a>
          </div>
        </div>
      })}
    </div>
  )
}

export default Performances;