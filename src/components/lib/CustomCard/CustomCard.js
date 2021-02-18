import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CustomCard.css';

const CustomCard = (props) => {
  return (
    <Card style={{ width: '10rem' }}>
    <Card.Body>
      <Card.Title>Recipe Name</Card.Title>
      <Card.Text>Cook Time: 10s</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CustomCard;
