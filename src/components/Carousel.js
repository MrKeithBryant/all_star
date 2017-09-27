import React from 'react';

export default class Carousel extends React.Component {
  render () {
    return (
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img className='item1' src="..." alt="Chania"/>
            <div className="carousel-caption">
              <h3>Chania</h3>
              <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
            </div>
          </div>
          <div className="item">
            <img className='item2' src="..." alt="Chania"/>
            <div className="carousel-caption">
              <h3>Chania</h3>
              <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
            </div>
          </div>
          <div className="item">
            <img className='item3' src="..." alt="Flower"/>
            <div className="carousel-caption">
              <h3>Flowers</h3>
              <p>Beautiful flowers in Kolymbari, Crete.</p>
            </div>
          </div>
          <div className="item">
            <img className='item4' src="..." alt="Flower"/>
            <div className="carousel-caption">
              <h3>Flowers</h3>
              <p>Beautiful flowers in Kolymbari, Crete.</p>
            </div>
          </div>
        </div>


        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      )
  }
}
