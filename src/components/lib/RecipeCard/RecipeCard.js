import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './RecipeCard.css';


const RecipeCard = (props) => {
  return (
    <Card className="recipe-card">
      <Card.Link as={NavLink} to={'/recipe/' + props.id}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
            {props.image && <Card.Img src={props.image} />}
        </Card.Body>
      </Card.Link>
    </Card>
  )
}

export default RecipeCard;