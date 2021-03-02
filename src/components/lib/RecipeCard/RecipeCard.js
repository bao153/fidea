import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import './RecipeCard.css';

import { SavedRecipesContext } from '../../../contexts/SavedRecipesContext';
import savedIcon from '../../../assets/like.svg';

const RecipeCard = (props) => {
  const { savedRecipes, setSavedRecipes } = useContext(SavedRecipesContext);

  const toggleSave = (e) => {
    e.preventDefault();
    if (!savedRecipes.includes(props.id)) {
      let newSavedRecipes = [...savedRecipes];
      newSavedRecipes.push(props.id);
      setSavedRecipes(newSavedRecipes);
      if (!document.getElementById("saved-icon-" + props.id).classList.contains("saved")) {
        document.getElementById("saved-icon-" + props.id).classList.add("saved");
      }
    } else {
      let newSavedRecipes = savedRecipes.filter(id => id != props.id);
      setSavedRecipes(newSavedRecipes);
    }
  }

  return (
    <Card className={"recipe-card" + (savedRecipes.includes(props.id) ? " saved" : "")} >
      <Card.Header onClick={toggleSave}>
        <span 
          id={"saved-icon-" + props.id} 
          className={"saved-icon" 
                      + (savedRecipes.includes(props.id) ? " saved" : "")
                      + (props.inSaved ? " inSaved" : "")}></span>
      </Card.Header>
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