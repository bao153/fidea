import React, {  } from 'react';
import { useHistory } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

import './CustomJumbotron.css';

import logo from "../../../assets/logo.svg";

const CustomJumbotron = (props) => {
  const history = useHistory();

  const handleBackBtn = (e) => {
    history.goBack();
  }

  const handleLogo = (e) => {
    history.push("/home");
  }

  return (
    <Jumbotron id="jumbotron">
      {!props.noBackBtn && <span onClick={handleBackBtn} className="back-btn"></span>}
      <img onClick={handleLogo} className="jumbotron-logo" src={logo}/>
    </Jumbotron>
  )
}

export default CustomJumbotron;