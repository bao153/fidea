import React, { useState, useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import algoliasearch from 'algoliasearch/lite';

import "./Ingredients.css";
import { IngredientsContext } from '../../../contexts/IngredientsContext';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import IngredientCard from '../../lib/IngredientCard/IngredientCard';
import RecipeCard from '../../lib/RecipeCard/RecipeCard';

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
        <InputGroup className="add-ingredient-input mt-5 mb-5 mx-3">
          <FormControl
            type="text"
            onKeyPress={handleEnter}
            id="ingredient-to-add"
            placeholder="Enter your ingredient"
          />
          <InputGroup.Append>
            <Button onClick={handleAdd} variant="outline-primary">Add to Pantry</Button>
          </InputGroup.Append>
        </InputGroup>

        <div className="ingredient-cards">
          {savedIngredients && savedIngredients.map((ingredient, idx) => 
            <IngredientCard
              query={ingredientQuery} 
              registerQuery={setIngredientQuery} 
              key={idx}
              ingredient={ingredient} 
            /> 
          )}
          <Button 
            className="search-recipes-btn"
            onClick={handleSearch}
            variant="primary"
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