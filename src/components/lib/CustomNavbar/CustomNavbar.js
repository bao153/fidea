import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = (props) => {
  const [activeKey, setActiveKey] = useState('/home');

  const handleSelect = (eventKey, e) => {
    setActiveKey(eventKey);
    console.log(eventKey)
  }

  return (
      <Navbar 
        collapseOnSelect
        bg="dark" variant="dark" 
        fixed="bottom"
        expand="sm"
      >
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-left">
          <Nav onSelect={handleSelect} 
            className="justify-content-around" 
            defaultActiveKey="/home"
            activeKey={activeKey}
          >
            <Nav.Link as={NavLink} to="/home" eventKey="home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/ingredients" eventKey="ingredients">Ingredients</Nav.Link>
            <Nav.Link as={NavLink} to="/saved" eventKey="saved">Saved</Nav.Link>
            <Nav.Link as={NavLink} to="/profile" eventKey="profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default CustomNavbar;