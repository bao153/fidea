import React, { useState, useEffect } from 'react';

import "./Home.css";

import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomCard from '../../lib/CustomCard/CustomCard';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';

const Home = (props) => {
  const [ recipesData, setRecipesData ] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    fetch('/data/recipes.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        let newRecipesData = [...myJson];
        setRecipesData(newRecipesData);
      });
  }

  return (
    <div className='Home'>
      <CustomJumbotron text="Fidea" />
      <div className="home-container">
        <div className="recipe-cards">
          {
            recipesData && recipesData.map((recipe, idx)=> {
              return <CustomCard key={idx} title={recipe.name} text={recipe.cook_time}/>
            })
          }
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Home;