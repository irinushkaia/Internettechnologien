// src/components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavbarComponent = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">ReiseApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          {currentUser && <Nav.Link as={Link} to="/chatbot">Chatbot</Nav.Link>}
          {currentUser ? (
            <>
              <Nav.Link as={Link} to="/profile">{currentUser.email}</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
