import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import "./CustomTooltip.css";

import infoIcon from "../../../assets/info-button.svg";

const CustomTooltip = (props) => {
  const [ content, setContent ] = useState("");

  useEffect(() => {
    if (props.Home && !props.Ingredients && !props.Saved) {
      setContent(`<strong>1.</strong> Think of an ingredient you want to have in your recipe
                <br/>
                <strong>2.</strong> Put that ingredient in the search box below
                <br/>
                <strong>3.</strong> Get recipes based on that ingredient!`);
    } else if (!props.Home && props.Ingredients && !props.Saved) {
      setContent(`<strong>1.</strong> Enter your ingredients into the pantry
                <br/>
                <strong>2.</strong> Click (or unclick) the ingredient cards below to customize your recipe search 
                <br/>
                <strong>3.</strong> Simply use the search button to get recipes!`);
    } else if (!props.Home && !props.Ingredients && props.Saved) {
      setContent(`<strong>1.</strong> Go to view your saved recipes by clicking on them
                <br/>
                <strong>2.</strong> Unsave recipes by clicking the heart icon 
                <br/>
                <strong>3.</strong> Save lots of them so you won't have to go back searching for them!`);
    }
  }, [])
  return (
    <div className="info-container">
      <div className="info-overlay">
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover>
            <Popover.Title as="h3">How to use:</Popover.Title>
            <Popover.Content>
              {ReactHtmlParser(content)}
            </Popover.Content>
          </Popover>
        }>
          <img className="info-icon" src={infoIcon}/>
      </OverlayTrigger> 
      </div>
    </div>
  )
}

export default CustomTooltip;

