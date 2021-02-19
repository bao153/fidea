import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = (props) => {
  const [activeKey, setActiveKey] = useState('/home');

  const handleSelect = (eventKey, e) => {
    //e.preventDefault();
    setActiveKey(eventKey);
    console.log(eventKey)
  }

  return (
      <Navbar style={{height: "7rem"}} bg="dark" variant="dark" fixed="bottom">
        <Nav onSelect={handleSelect} 
          className="justify-content-around" 
          style={{width: "100rem"}} 
          defaultActiveKey="/"
          activeKey={activeKey}
        >
          <Nav.Link as={NavLink} exact to="/" eventKey="home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/ingredients" eventKey="ingredients">Ingredients</Nav.Link>
          <Nav.Link as={NavLink} to="/saved" eventKey="saved">Saved</Nav.Link>
          <Nav.Link as={NavLink} to="/profile" eventKey="profile">Profile</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default CustomNavbar;