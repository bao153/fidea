import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import "./Recipe.css";

import { RecipesContext } from '../../../contexts/RecipesContext';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import savedIcon from '../../../assets/saved.png';

const Recipe = (props) => {
  const history = useHistory();
  const { savedRecipes, setSavedRecipes } = useContext(RecipesContext);

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

  const toggleSave = (e) => {
    e.preventDefault();

    if (!savedRecipes.includes(recipeId)) {
      let newSavedRecipes = [...savedRecipes];
      newSavedRecipes.push(recipeId);
      setSavedRecipes(newSavedRecipes);
      if (!document.getElementById("save-btn").classList.contains("saved")) {
        document.getElementById("save-btn").classList.add("saved");
      }
    } else {
      let newSavedRecipes = savedRecipes.filter(id => id != recipeId);
      setSavedRecipes(newSavedRecipes);
      if (document.getElementById("save-btn").classList.contains("saved")) {
        document.getElementById("save-btn").classList.remove("saved");
      }
    }
  }

  const goBack = (e) => {
    history.goBack();
  }

  return (
    recipe && <div className="recipe">
      <CustomJumbotron
        text={recipe.name} 
      />
      <div className="recipe-container">
        <Button onClick={goBack} className="back-btn">
          Back Button
        </Button>
        <p style={{fontWeight: "bold"}}>Ingredients:</p>
        <p>{recipe.ingredients}</p>
        <br/>
        <p style={{fontWeight: "bold"}}>Cooking Time:</p>
        <p>{recipe.cook_time}</p>
        <br/>
        <p style={{fontWeight: "bold"}}>Instructions: </p>
        <p>{recipe.instructions}</p>
        <Button 
          id="save-btn" 
          onClick={toggleSave} 
          className={"save-btn" + (savedRecipes.includes(recipeId) ? " saved" : "")}
        >
          <img src={savedIcon}/>
        </Button>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Recipe;