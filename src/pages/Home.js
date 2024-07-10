// src/pages/Home.js
import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HotelsList from '../components/HotelsList';

const Home = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <HomeCarousel />
      <div className="container mt-5">
        <h1>Willkommen bei ReiseApp! </h1>
        <br></br>

      <p>Planen Sie Ihre nächste Reise mit Leichtigkeit und Komfort. Bei uns finden Sie die besten Unterkünfte weltweit, maßgeschneidert für Ihre Bedürfnisse. Egal ob luxuriöses Hotel, gemütliches Bed & Breakfast oder einzigartiges Ferienhaus – wir haben die perfekte Unterkunft für Sie. Buchen Sie jetzt und erleben Sie unvergessliche Momente.!</p>
      <br></br>
        <HotelsList />
      </div>
    </div>
  );
};

export default Home;
