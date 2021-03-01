import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import "./Recipe.css";

import { SavedRecipesContext } from '../../../contexts/SavedRecipesContext';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import savedIcon from '../../../assets/saved.png';

const Recipe = (props) => {
  const { savedRecipes, setSavedRecipes } = useContext(SavedRecipesContext);
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
      });
  }

  const handleSave = (e) => {
    if (!savedRecipes.includes(recipeId)) {
      let newSavedRecipes = [...savedRecipes];
      newSavedRecipes.push(recipeId);
      setSavedRecipes(newSavedRecipes);
    }
  }

  return (
    recipe && <div className="recipe">
      <CustomJumbotron
        text={recipe.name} 
      />
      <div className="recipe-container">
        <p style={{fontWeight: "bold"}}>Ingredients:</p>
        <p>{recipe.ingredients}</p>
        <br/>
        <p style={{fontWeight: "bold"}}>Cooking Time:</p>
        <p>{recipe.cook_time}</p>
        <br/>
        <p style={{fontWeight: "bold"}}>Instructions: </p>
        <p>{recipe.instructions}</p>
        <Button onClick={handleSave} className="save-btn"><img src={savedIcon}/></Button>
        
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Recipe;