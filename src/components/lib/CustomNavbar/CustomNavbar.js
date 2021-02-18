import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = (props) => {
  const [activeKey, setActiveKey] = useState('/');

  const handleSelect = (eventKey, e) => {
    e.preventDefault();
    setActiveKey(eventKey);
  }

  return (
      <Navbar style={{height: "7rem"}} bg="dark" variant="dark" fixed="bottom">
        <Nav onSelect={handleSelect} 
          className="justify-content-around" 
          style={{width: "100rem"}} 
          activeKey={activeKey}
        >
          <Nav.Link href="/" eventKey="home">Home</Nav.Link>
          <Nav.Link href="#ingredients" eventKey="ingredients">Ingredients</Nav.Link>
          <Nav.Link href="#saved" eventKey="saved">Saved</Nav.Link>
          <Nav.Link href="#profile" eventKey="profile">Profile</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default CustomNavbar;