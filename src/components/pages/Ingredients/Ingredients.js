import React, { useState, useContext } from 'react';
import algoliasearch from 'algoliasearch/lite';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import "./Ingredients.css";
import { IngredientsContext } from '../../../contexts/IngredientsContext';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import IngredientCard from '../../lib/IngredientCard/IngredientCard';
import RecipeCard from '../../lib/RecipeCard/RecipeCard';
import CustomTooltip from '../../lib/CustomTooltip/CustomTooltip';

const client = algoliasearch(
    process.env.REACT_APP_ALGOLIA_ID, 
    process.env.REACT_APP_ALGOLIA_API_KEY);
const index = client.initIndex("fidea_recipes");

const Ingredients = (props) => {
  const { savedIngredients, setSavedIngredients } = useContext(IngredientsContext);
  const [ ingredientQuery, setIngredientQuery ] = useState("");
  const [ recipesQueried, setRecipesQueried ] = useState([]);

    const handleAdd = (e) => {
      e.preventDefault();
      const ingredientAdded = document.getElementById("ingredient-to-add").value;

      if (ingredientAdded) {
        let newIngredients = [...savedIngredients];
        if (!newIngredients.includes(ingredientAdded.trim())) {
          newIngredients.push(ingredientAdded);
          newIngredients = newIngredients.filter(ingredient => ingredient != "Your ingredient goes here!");
          setSavedIngredients(newIngredients);
          document.getElementById("ingredient-to-add").value = "";
        }
      }
    }

    const handleEnter = (e) => {
      if (e.key === "Enter") {
        handleAdd(e);
      }
    }

    const handleSearch = (e) => {
      e.preventDefault();

      if (ingredientQuery.trim()) {
        index.search(ingredientQuery).then(({ hits }) => {
          setRecipesQueried(hits);
        });
      } else {
          setRecipesQueried([]);
      }
    }

  return (
    <div className="Ingredients">
      <Modal>
        <Modal.Header>
            Instant Recipe Search
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      <CustomJumbotron text="Ingredients" />
      <div className="ingredients-container">
        <CustomTooltip Ingredients/>
        <InputGroup className="add-ingredient-input mx-3">
          <OverlayTrigger
            className="tooltip-overlay"
            placement="bottom"
            overlay={<Tooltip id="recipe-search-tooltip">Store <strong>ingredients</strong> in your <strong>pantry</strong> here</Tooltip>}
          >
            <FormControl
              type="text"
              onKeyPress={handleEnter}
              id="ingredient-to-add"
              placeholder="Enter your ingredient"
            />
          </OverlayTrigger>

          <InputGroup.Append>
            <Button className="add-to-pantry-btn" onClick={handleAdd} variant="outline-warning">Add to Pantry</Button>
          </InputGroup.Append>
        </InputGroup>

        <div className="ingredient-cards">
          {savedIngredients && savedIngredients.map((ingredient, idx) => 
            <IngredientCard
            query={ingredientQuery} 
            registerQuery={setIngredientQuery} 
            key={ingredient}
            ingredient={ingredient} 
          /> 
          )}
          <Button 
            style={{"font-weight": "bold"}}
            className="search-recipes-btn"
            onClick={handleSearch}
            variant="outline-warning"
          >
            Search Recipes 
          </Button>
          {recipesQueried && recipesQueried.map((recipe, idx) => 
            <RecipeCard
              key={idx}
              id={recipe.objectID} 
              image={recipe.image} 
              title={recipe.name} 
            />
          )}
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Ingredients;