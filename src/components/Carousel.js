import React from 'react';

export default class Carousel extends React.Component {
  render () {
    return (
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="AllStarVans3.jpeg" alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide"/>
          </div>
        </div>
      </div>
    )
  }
}
