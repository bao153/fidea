import React, { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import { connectPagination } from 'react-instantsearch-dom';

import "./Home.css";
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomPagination from '../../lib/CustomPagination/CustomPagination';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import RecipeCard from '../../lib/RecipeCard/RecipeCard';


const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY,
)

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



const Pagination = connectPagination(CustomPagination);

const Home = (props) => {
  //const [ recipesData, setRecipesData ] = useState([]);

  //useEffect(() => {
  //  fetchRecipes();
  //}, []);

  //const fetchRecipes = () => {
  //  fetch('/data/recipes.json'
  //  ,{
  //    headers : { 
  //      'Content-Type': 'application/json',
  //      'Accept': 'application/json'
  //     }
  //  }
  //  )
  //    .then((response) => {
  //      return response.json();
  //    })
  //    .then((myJson) => {
  //      let newRecipesData = [...myJson];
  //      setRecipesData(newRecipesData);
  //    });
  //}

  return (
    <div className='Home'>
      <CustomJumbotron text="Fidea" />
      <div className="home-container">
        <div className="ais-InstantSearch">
          <InstantSearch indexName="fidea_recipes" searchClient={searchClient}>
              <Configure hitsPerPage={5} />
              <SearchBox />
              <Hits hitComponent={Hit} />
              <Pagination/>
          </InstantSearch>
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Home;