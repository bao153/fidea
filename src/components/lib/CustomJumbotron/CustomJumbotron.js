import React, {  } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './CustomJumbotron.css';

const CustomJumbotron = (props) => {
  return (
    <Jumbotron className="mr-right" style={{height: "7rem"}} fluid>
      <h1>{props.text}</h1>
    </Jumbotron>
  )
}

export default CustomJumbotron;