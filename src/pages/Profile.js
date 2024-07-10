// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import BookingCard from '../components/BookingCard';

const Profile = () => {
  const { currentUser } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const storedBookings = JSON.parse(localStorage.getItem(`${currentUser.email}_bookings`)) || [];
      setBookings(storedBookings);
      console.log('Loaded bookings from localStorage:', storedBookings);
    }
  }, [currentUser]);

  useEffect(() => {
    const handleBookingConfirmation = (event) => {
      const bookingDetails = event.detail;
      console.log('Booking confirmation received:', bookingDetails);
      setBookings((prevBookings) => {
        const updatedBookings = [...prevBookings, bookingDetails];
        localStorage.setItem(`${currentUser.email}_bookings`, JSON.stringify(updatedBookings));
        console.log('Updated bookings:', updatedBookings);
        return updatedBookings;
      });
    };

    window.addEventListener('bookingConfirmation', handleBookingConfirmation);

    return () => {
      window.removeEventListener('bookingConfirmation', handleBookingConfirmation);
    };
  }, [currentUser]);

  const handleDeleteBooking = (bookingToDelete) => {
    const updatedBookings = bookings.filter(booking => booking !== bookingToDelete);
    setBookings(updatedBookings);
    localStorage.setItem(`${currentUser.email}_bookings`, JSON.stringify(updatedBookings));
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <h2 className="text-center mb-4">Profil</h2>
      <div>
        <strong>Email:</strong> {currentUser ? currentUser.email : 'Not logged in'}
      </div>
      {bookings.length === 0 && <p>No bookings yet.</p>}
      <div className="row">
        {bookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} onDelete={handleDeleteBooking} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
