import React from 'react';

export default class Carousel extends React.Component {
  render () {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src='AllStarRight.jpeg' style={{height: '200px'}} alt="VansRight"/>
            <div className="carousel-caption">
              <h3>Van Pic</h3>
              <p>Where's my Van Pic!?</p>
            </div>
          </div>

          <div className="item">
            <img src="img_chania2.jpg" style={{height: '200px'}} alt="Chania"/>
            <div className="carousel-caption">
              <h3>Chania</h3>
              <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
            </div>
          </div>

          <div className="item">
            <img src="img_flower.jpg" style={{height: '200px'}} alt="Flower"/>
            <div className="carousel-caption">
              <h3>Flowers</h3>
              <p>Beautiful flowers in Kolymbari, Crete.</p>
            </div>
          </div>

            <div className="item">
              <img src="img_flower2.jpg" style={{height: '200px'}} alt="Flower"/>
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
