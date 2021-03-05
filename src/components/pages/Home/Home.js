import React, { useContext, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
} from 'react-instantsearch-dom';

import "./Home.css";
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomPagination from '../../lib/CustomPagination/CustomPagination';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomHit from '../../lib/CustomHit/CustomHit';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY,
)

const Home = (props) => {

  return (
    <div className='Home'>
      <CustomJumbotron noBackBtn text="Fidea" />
      <div className="home-container">
        <div className="ais-InstantSearch">
          <InstantSearch indexName="fidea_recipes" searchClient={searchClient}>
              <Configure hitsPerPage={10} />
              <SearchBox translations={{
                placeholder: "Search recipes..."
              }} />
              <Hits hitComponent={CustomHit} />
              <CustomPagination/>
          </InstantSearch>
        </div>
      </div>
      <CustomNavbar />
    </div>
  )
}

export default Home;