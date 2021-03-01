import React from 'react';
import PropTypes from 'prop-types';

import RecipeCard from '../RecipeCard/RecipeCard';

const Hit = (props) => {
  return (
    <RecipeCard 
      id={props.hit.objectID} 
      image={props.hit.image} 
      title={props.hit.name} 
      text={props.hit.description}
    />
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hit;