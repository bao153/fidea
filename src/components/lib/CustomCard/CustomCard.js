import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './CustomCard.css';

const CustomCard = (props) => {
  return (
    <Card 
      bg={props.variant ? props.variant.toLowerCase() : null}
    >
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.text}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CustomCard;
