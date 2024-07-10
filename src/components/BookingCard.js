// src/components/BookingCard.js
import React from 'react';

const BookingCard = ({ booking, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3>{booking.hotelName}</h3>
        <p><strong>Land:</strong> {booking.country}</p>
        <p><strong>Stadt:</strong> {booking.city}</p>
        <p><strong>Dienstleistungen:</strong> {booking.services.join(', ')}</p>
        <p><strong>Personen:</strong> {booking.people}</p>
        <p><strong>Gesamtpreis:</strong> ${booking.totalPrice}</p>
        <button className="btn btn-danger" onClick={() => onDelete(booking)}>Löschen</button>
      </div>
    </div>
  );
};

export default BookingCard;
