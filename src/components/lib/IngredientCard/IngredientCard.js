import React, { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import './IngredientCard.css';

import { IngredientsContext } from '../../../contexts/IngredientsContext';

const IngredientCard = (props) => {
  const { savedIngredients, setSavedIngredients } = useContext(IngredientsContext);
  const [ active, setActive ] = useState(false);

  useEffect(() => {
  }, [active])

  const toggleActive = (e) => {
    e.preventDefault();
    
    const newActiveState = !active;
    const ingredientQuery = props.query;
    const ingredientLC = props.ingredient.toLowerCase();

    if (newActiveState) {
      if (!ingredientQuery.includes(ingredientLC)) {
        const newQuery = ingredientQuery + props.ingredient.toLowerCase() + " ";
        props.registerQuery(newQuery);

      }
    } else {
      if (ingredientQuery.includes(ingredientLC)) {
        const newQuery = ingredientQuery.replace(ingredientLC + " ","");
        props.registerQuery(newQuery);

      }
    }
    setActive(newActiveState);
    
  }

  const handleRemove = (e) => {
    e.preventDefault();

    const newIngredients = [...savedIngredients].filter(ingredient => ingredient != props.ingredient);
    setSavedIngredients(newIngredients);

    const ingredientQuery = props.query;
    const ingredientLC = props.ingredient.toLowerCase();

    if (document.getElementById("ingredient-card-" + props.ingredient).classList.contains("active")) {
      document.getElementById("ingredient-card-" + props.ingredient).classList.remove("active");
    }

    if (ingredientQuery.includes(ingredientLC)) {
      const newQuery = ingredientQuery.replace(ingredientLC + " ","");
      props.registerQuery(newQuery);
    }

    setActive(false);
  }

  return (
    <Card
      id={"ingredient-card-" + props.ingredient}
      className={"ingredient-card" + (active ? " active" : "")}
      bg={props.variant ? props.variant.toLowerCase() : null}
    >
      <Card.Header onClick={handleRemove}>
        <span className="remove-btn"></span>
      </Card.Header>
      <Card.Body onClick={toggleActive}>
        <Card.Title>{props.ingredient}</Card.Title>
      </Card.Body>
  </Card>
  )
}

export default IngredientCard;
