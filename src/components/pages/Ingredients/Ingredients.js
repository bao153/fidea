import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "./Ingredients.css";
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import IngredientCard from '../../lib/IngredientCard/IngredientCard';

const Ingredients = (props) => {
  const ingredientCards = [
    {
      item: 'Garlic',
      amount: '10kg'
    },
    {
      item: 'Chive',
      amount: '10kg'
    },
    {
      item: 'Fish sauce',
      amount: '10kg'
    },
    {
      item: 'Wings',
      amount: '10kg'
    },
    {
      item: 'Bacon',
      amount: '10kg'
    }
  ].map((ingredient, idx) => 
    <IngredientCard
      key={idx}
      variant="light" 
      title={ingredient.item} 
    /> 
    );

    const handleAdd = (e) => {
      e.preventDefault();
      const input = document.getElementById("ingredient-to-add");
      const ingredientAdded = input.value;
      ingredientCards.push({item: ingredientAdded, amount: '20kg'});
      document.getElementById("ingredient-to-add").value = "";
    }

    const handleEnter = (e) => {
      if (e.key === "Enter") {
        handleAdd(e);
      }
    }

  return (
    <div className="Ingredients">
      <CustomJumbotron text="Ingredients" />
      <div className="ingredients-container">
        <InputGroup className="mt-5 mb-5 mx-3">
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
        {/*<Form>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Group className="ingredient-input" controlId="ingredientInput">
                <Form.Control  type="input" placeholder="Enter your ingredient" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Button className="ingredient-add-btn" variant="outline-success" type="submit">
                Add To Pantry
              </Button>
            </Col>
          </Form.Row>
          <Form.Group>
            <Form.File id="ingredientPhoto" label="Ingredient photo" />
          </Form.Group>
        </Form>*/}


        <div className="ingredient-cards">
          {ingredientCards}
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Ingredients;