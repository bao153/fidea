import React, {  } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Headroom from 'react-headroom';
import './CustomJumbotron.css';

const CustomJumbotron = (props) => {
  return (
    <Jumbotron id="jumbotron">
      <div>{props.text}</div>
    </Jumbotron>
  )
}

export default CustomJumbotron;