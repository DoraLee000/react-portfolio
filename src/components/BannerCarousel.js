import React from 'react';
import Carousel from 'nuka-carousel';

class CarouselImage extends React.Component {
    render() {
      return (
        <Carousel autoplay={true}>
        <img src="./images/01.jpg" />
        <img src="./images/02.jpg" />
        <img src="./images/03.jpg" />
        <img src="./images/05.jpg" />
        <img src="./images/06.jpg" />
        <img src="./images/07.jpg" />
        <img src="./images/01.jpg" />
        <img src="./images/02.jpg" />
        <img src="./images/01.jpg" />
      </Carousel>
      );
    }
  }

export default CarouselImage;