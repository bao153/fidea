import React, { useContext, useEffect } from 'react';

import "./Home.css";

import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomCard from '../../lib/CustomCard/CustomCard';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';

const Home = (props) => {
  const recipes = [
    {
      name: 'Garlic Butter Wings',
      time: '10min'
    },
    {
      name: 'Garlic Fish Sauce Wings',
      time: '10min'
    },
    {
      name: 'Garlic Chive Wings',
      time: '10min'
    },
    {
      name: 'Garlic BBQ Wings',
      time: '10min'
    },
    {
      name: 'Garlic Bacon Wings',
      time: '10min'
    }
  ].map((recipe, idx) => <CustomCard title={recipe.name} text={recipe.time}/>);
  return (
    <div className='Home'>
      <CustomJumbotron text="Home" />
      <div className="home-container">
        <div className="recipe-cards">
          {recipes}
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Home;