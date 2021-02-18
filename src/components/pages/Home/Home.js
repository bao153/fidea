import React, { useContext, useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';

import "./Home.css";

import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomCard from '../../lib/CustomCard/CustomCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Home = (props) => {
  return (
    <div className='Home'>
      <CustomJumbotron text="Home" />
      <div className="cards">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Home;