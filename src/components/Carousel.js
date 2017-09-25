import React from 'react';

export default class Carousel extends React.Component {
  render () {
    return (
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img id='Caro1' className="d-block w-100" src="..." alt="Vans"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Office"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Apartments"/>
          </div>
        </div>
      </div>
    )
  }
}
