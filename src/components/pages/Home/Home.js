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
      id: 1,
      name: 'Garlic Butter Wings',
      time: '10min'
    },
    {
      id: 2,
      name: 'Garlic Fish Sauce Wings',
      time: '10min'
    },
    {
      id: 3,
      name: 'Garlic Chive Wings',
      time: '10min'
    },
    {
      id: 4,
      name: 'Garlic BBQ Wings',
      time: '10min'
    },
    {
      id: 5,
      name: 'Garlic Bacon Wings',
      time: '10min'
    }
  ].map((recipe, idx) => <CustomCard key={recipe.id} title={recipe.name} text={recipe.time}/>);
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