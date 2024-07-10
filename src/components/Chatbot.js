import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useAuth } from '../contexts/AuthContext';
import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const { currentUser } = useAuth();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (currentUser && !socket) {
      const setupSocket = async () => {
        const token = await currentUser.getIdToken();
        const newSocket = io('http://localhost:5000', {
          auth: {
            token
          }
        });

        newSocket.on('response', handleBotResponse);
        newSocket.on('booking_confirmation', handleBookingConfirmation);
        newSocket.on('connect', () => {
          console.log(`Connected: ${currentUser.email}`);
        });
        newSocket.on('disconnect', () => {
          console.log(`Disconnected: ${currentUser.email}`);
        });

        setSocket(newSocket);

        return () => {
          newSocket.off('response', handleBotResponse);
          newSocket.off('booking_confirmation', handleBookingConfirmation);
          newSocket.close();
        };
      };

      setupSocket();
    }
    //eslint-disable-next-line
  }, [currentUser]);

  const handleBotResponse = (data) => {
    console.log('Received response from server:', data);
    if (data.response) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: data.response }
      ]);
      scrollToBottom();
    }
  };

  const handleBookingConfirmation = (data) => {
    console.log('Received booking confirmation from server:', data);
    const event = new CustomEvent('bookingConfirmation', { detail: data });
    window.dispatchEvent(event);
    // Store booking details in localStorage
    const storedBookings = JSON.parse(localStorage.getItem(`${currentUser.email}_bookings`)) || [];
    const updatedBookings = [...storedBookings, data];
    localStorage.setItem(`${currentUser.email}_bookings`, JSON.stringify(updatedBookings));
  };

  const sendMessage = () => {
    if (input.trim() && socket) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: input }
      ]);
      console.log('Sending message to server:', { message: input });
      socket.emit('message', { message: input });
      setInput('');
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setMessages([
      { sender: 'bot', text: "Ich bin Ihr Buchungsassistent. Ob Sie eine Reservierung vornehmen möchten oder eine Empfehlung für ein Hotel benötigen, ich bin hier, um Ihnen zu helfen. Was kann ich für Sie tun?" }
    ]);
  }, []);

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          className="message-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
          placeholder="Type a message..."
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
