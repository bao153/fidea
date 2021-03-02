import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

import './IngredientCard.css';

const IngredientCard = (props) => {
  const [ active, setActive ] = useState(false);

  const toggleActive = () => {
    const activeState = active;
    setActive(!activeState);
    const ingredientQuery = props.query;
    const ingredientLC = props.ingredient.toLowerCase();

    if (!activeState) {
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
  }

  return (
    <Card
      className={`ingredient-card${active ? " active": ""}`}
      onClick={toggleActive} 
      bg={props.variant ? props.variant.toLowerCase() : null}
    >
    <Card.Body>
      <Card.Title>{props.ingredient}</Card.Title>
    </Card.Body>
  </Card>
  )
}

export default IngredientCard;
