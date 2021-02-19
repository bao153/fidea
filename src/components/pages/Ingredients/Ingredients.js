import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./Ingredients.css";
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomCard from '../../lib/CustomCard/CustomCard';

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
    <CustomCard 
      variant="light" 
      title={ingredient.item} 
      text={ingredient.amount} /> 
    );

  return (
    <div className="Ingredients">
      <CustomJumbotron text="Ingredients" />
      <div className='ingredients-container'>
        <Form>
          <Form.Group className="ingredient-input" controlId="ingredientInput">
            <Form.Label className="mr-auto">Add to pantry</Form.Label>
            <Form.Control  type="input" placeholder="Enter your ingredient" />
          </Form.Group>
          <Form.Group>
            <Form.File id="ingredientPhoto" label="Ingredient photo" />
          </Form.Group>
        </Form>

        <Button variant="outline-success" type="submit">
          Add
        </Button>

        <div className="ingredient-cards">
          {ingredientCards}
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Ingredients;