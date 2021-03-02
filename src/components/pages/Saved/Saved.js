import React, { useContext, useState, useEffect } from 'react';

import "./Saved.css";

import { RecipesContext } from '../../../contexts/RecipesContext';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import RecipeCard from '../../lib/RecipeCard/RecipeCard';

const Saved = (props) => {
  const { savedRecipes } = useContext(RecipesContext);
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
    <div className="Saved">
      <CustomJumbotron text="Saved" />
      <div className="saved-container">
        {recipesData 
        && recipesData.filter(recipe => savedRecipes.includes(recipe.objectID))
                      .map((recipe, idx) => {
                        return (<RecipeCard 
                        key={idx}
                        id={recipe.objectID || ""} 
                        image={recipe.image || ""} 
                        title={recipe.name || ""} 
                        inSaved={true}
                      />)
                      })}
        {(savedRecipes && savedRecipes.length === 0) 
          ? <div className="empty-saved">No saved recipes :(</div> 
          : null}

      </div>
      <CustomNavbar />
    </div>
  )
}

export default Saved;