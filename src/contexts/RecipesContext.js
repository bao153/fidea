import React, { createContext, useEffect, useState } from 'react';

export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
  const [ savedRecipes, setSavedRecipes ] = useState([]);

  useEffect(() => {
  }, [savedRecipes])

  return (
    <RecipesContext.Provider value={{savedRecipes, setSavedRecipes}}>
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesContextProvider;