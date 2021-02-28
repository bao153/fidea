import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "./Recipe.css";

import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';

const Recipe = (props) => {
  const [ recipesData, setRecipesData ] = useState([]);
  const [ recipe, setRecipe ] = useState("");

  const { recipeId } = useParams();

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
        setRecipe(newRecipesData[recipeId]);
        console.log(newRecipesData[recipeId].name.split(" ").length);
      });
  }


  return (
    <div className="recipe">
      <CustomJumbotron 
        text={recipe.name} 
      />
      <div className="recipe-container">
        {/*<div className="description">{recipe.description}</div>*/}
        <p>Ingredients:</p>
        <p>{recipe.ingredients}</p>
        <br/>
        <p>Cooking Time:</p>
        <p>{recipe.cook_time}</p>
        <br/>
        <p>Instructions: {recipe.instructions} </p>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Recipe;