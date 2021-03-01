import React, { useContext, useState, useEffect } from 'react';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';

import { SavedRecipesContext } from '../../../contexts/SavedRecipesContext';

const Saved = (props) => {
  const { savedRecipes } = useContext(SavedRecipesContext);
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
      Saved
      {recipesData 
      && recipesData.filter(recipe => savedRecipes.includes(recipe.objectID))
                    .map((recipe, idx) => {
                      return <p key={idx}>{recipe.name}</p>
                    })}
      <CustomNavbar />
    </div>
  )
}

export default Saved;