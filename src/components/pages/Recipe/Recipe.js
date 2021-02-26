import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = (props) => {
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

  const { recipeId } = useParams();

  return (
    <div>
      Recipe { recipesData[recipeId] && recipesData[recipeId].name }
    </div>
  )
}

export default Recipe;