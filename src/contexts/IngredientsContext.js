import React, { createContext, useEffect, useState } from 'react';

export const IngredientsContext = createContext();

const IngredientsContextProvider = (props) => {
  const [ savedIngredients, setSavedIngredients ] = useState(["Your ingredient goes here!"]);

  useEffect(() => {
  }, [savedIngredients])

  return (
    <IngredientsContext.Provider value={{savedIngredients, setSavedIngredients}}>
      {props.children}
    </IngredientsContext.Provider>
  )
}

export default IngredientsContextProvider;