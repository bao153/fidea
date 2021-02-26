import React, { useState, useEffect } from 'react';

import "./Home.css";

import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import RecipeCard from '../../lib/RecipeCard/RecipeCard';


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
        console.log(response);
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
              return <RecipeCard key={idx} id={idx} image={recipe.image} title={recipe.name} text={recipe.cook_time}/>
            })
          }
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Home;