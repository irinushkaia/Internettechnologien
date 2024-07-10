// src/components/HotelsList.js
import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './HotelsList.css'; // Import the CSS file

const HotelsList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/hotels')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setHotels(data.hotels);
      })
      .catch(error => console.error('Error fetching hotels data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Hotels</h2>
      <Row>
        {hotels.map(hotel => (
          <Col key={hotel.hotel_id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="hotel-card">
              <Card.Img variant="top" src={hotel.photo} alt={`${hotel.name} photo`} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>{hotel.description}</Card.Text>
                <Card.Text>{hotel.city}, {hotel.country}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HotelsList;
