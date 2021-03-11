import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import "./CustomNavbar.css";  
import homeIcon from '../../../assets/home.svg';
import ingredientsIcon from '../../../assets/ingredients.svg';
import savedIcon from '../../../assets/like.svg';

const CustomNavbar = (props) => {
  const [activeKey, setActiveKey] = useState('/home');

  const handleSelect = (eventKey, e) => {
    setActiveKey(eventKey);
  }

  return (
      <Navbar 
        bg="light" variant="light" 
        fixed="bottom"
      >
          <Nav onSelect={handleSelect} 
            className="justify-content-around" 
            defaultActiveKey="/home"
            activeKey={activeKey}
          >
            <Nav.Link as={NavLink} to="/home" eventKey="home">
              <img src={homeIcon} />
              <div>Home</div>
            </Nav.Link>
            
            <Nav.Link className="ingredients-link" as={NavLink} to="/ingredients" eventKey="ingredients">
              <img src={ingredientsIcon} />
              <div>Ingredients</div>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/saved" eventKey="saved">
              <img src={savedIcon} />
              <div>Saved</div>
            </Nav.Link>
          </Nav>
      </Navbar>
  )
}

export default CustomNavbar;