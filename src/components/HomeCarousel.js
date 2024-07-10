// src/components/HomeCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css';

const HomeCarousel = () => {
  return (
    <Carousel interval={3000} controls={true} indicators={true} pause={false} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.vogue.com/photos/65f04d926294babad5413eb1/master/w_2560%2Cc_limit/GettyImages-1380534040.jpg"
          alt="Italien"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Exzellenz</h3>
          <p>Erleben Sie erstklassigen Service und unvergessliche Aufenthalte.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://vastphotos.com/files/uploads/photos/10551/beautiful-mountain-photo-l.jpg?v=20220712073521"
          alt="Frankreich"
        />
        <Carousel.Caption className="carousel-caption">
        <h3>Zuverlässigkeit</h3>
        <p>Vertrauen Sie auf unsere bewährte Qualität und Sicherheit bei jeder Buchung.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://svbtleusercontent.com/jizoydkvnzowq.jpg"
          alt="Dritte Folie"
        />
        <Carousel.Caption className="carousel-caption">
        <h3>Flexibilität</h3>
        <p>Finden Sie Unterkünfte, die sich Ihren individuellen Bedürfnissen anpassen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/72/55/b4/7255b41b3da7ea3e41af1cd6ac261944.jpg"
          alt="Vierte Folie"
        />
        <Carousel.Caption className="carousel-caption">
          <h3>Komfort</h3>
          <p>Genießen Sie eine stressfreie Reise mit sorgfältig ausgewählten Unterkünften.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
