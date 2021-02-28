import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import "./CustomNavbar.css";  
import homeIcon from '../../../assets/home.png';
import ingredientsIcon from '../../../assets/ingredients.png';
import savedIcon from '../../../assets/saved.png';
import profileIcon from '../../../assets/profile.png';

const CustomNavbar = (props) => {
  const [activeKey, setActiveKey] = useState('/home');

  const handleSelect = (eventKey, e) => {
    setActiveKey(eventKey);
    console.log(eventKey)
  }

  return (
      <Navbar 
        bg="dark" variant="dark" 
        fixed="bottom"
      >
          <Nav onSelect={handleSelect} 
            className="justify-content-around" 
            defaultActiveKey="/home"
            activeKey={activeKey}
          >
            <Nav.Link as={NavLink} to="/home" eventKey="home">
              <img src={homeIcon} />
            </Nav.Link>
            
            <Nav.Link className="ingredients-link" as={NavLink} to="/ingredients" eventKey="ingredients">
              <img src={ingredientsIcon} /></Nav.Link>

            <Nav.Link as={NavLink} to="/saved" eventKey="saved">
              <img src={savedIcon} /></Nav.Link>

            {/*<Nav.Link as={NavLink} to="/profile" eventKey="profile">
              <img src={profileIcon} /></Nav.Link>*/}
          </Nav>
      </Navbar>
  )
}

export default CustomNavbar;