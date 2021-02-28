import React, {  } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Headroom from 'react-headroom';
import './CustomJumbotron.css';

const CustomJumbotron = (props) => {
  return (
    <Jumbotron id="jumbotron">
      <div
        style={props.text && props.text.split(' ').length > 4 ? { fontSize: 1.1 + "rem"} : null}
      >{props.text}</div>
    </Jumbotron>
  )
}

export default CustomJumbotron;