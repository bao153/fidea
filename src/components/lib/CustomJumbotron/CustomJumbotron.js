import React, {  } from 'react';
import { useHistory } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './CustomJumbotron.css';

const CustomJumbotron = (props) => {
  const history = useHistory();

  const handleBackBtn = (e) => {
    history.goBack();
  }

  return (
    <Jumbotron id="jumbotron">
      {!props.noBackBtn && <span onClick={handleBackBtn} className="back-btn"></span>}
      <div className="jumbotron-text">{props.text}</div>
    </Jumbotron>
  )
}

export default CustomJumbotron;