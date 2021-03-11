import React, { useState, useEffect, useContext } from 'react';
import { useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import "./Recipe.css";

import { RecipesContext } from '../../../contexts/RecipesContext';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import likeIcon from '../../../assets/like.svg';

const Recipe = (props) => {
  const { savedRecipes, setSavedRecipes } = useContext(RecipesContext);

  const [ recipesData, setRecipesData ] = useState([]);
  const [ containerHeight, setContainerHeight ] = useState("34rem");
  const [ recipe, setRecipe ] = useState("");
  const { recipeId } = useParams();

  useEffect(() => {
    fetchRecipes();

  }, []);

  useEffect(() => {
    if (recipe.name && (recipe.name.split(" ").length == 5 || recipe.name.split(" ").length == 6) ) {
      setContainerHeight("32rem");
    } else if (recipe.name && recipe.name.split(" ").length >= 7 ) {
      setContainerHeight("29rem")
    }
  }, [recipe])

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
        let recipe = newRecipesData.filter(recipe => recipe.objectID == recipeId)[0];
        setRecipe(recipe);
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

  return (
    recipe && <div className="recipe">
      <CustomJumbotron
        image={recipe.image}
        text={recipe.name} 
      />
      <div className="recipe-container">
        <Image className="recipe-image" src={recipe.image} fluid rounded/>
        <br/>
        <br/>
        <div className="recipe-content">
          <p style={{fontSize: "2rem"}}><strong>{recipe.name}</strong></p>
          <p style={{color: "#aaa", fontStyle: "italic"}}>{recipe.description}</p>
          <br/>
          <p>🧺<strong> Ingredients:</strong></p>
          <p>   {recipe.ingredients}</p>
          <br/>
          <p>⏰<strong> Cooking Time:</strong></p>
          <p>   {recipe.cook_time}</p>
          <br/>
          <p>📝<strong> Instructions:</strong></p>
          <p>   {recipe.instructions}</p>
          <Button 
          id="save-btn" 
          onClick={toggleSave} 
          className={"fixed-bottom save-btn" + (savedRecipes.includes(recipeId) ? " saved" : "")}
          >
            <span className="save-btn-img"></span><span>Save recipe </span>
          </Button>
        </div>

      </div>
      <CustomNavbar />
    </div>
  )
}

export default Recipe;