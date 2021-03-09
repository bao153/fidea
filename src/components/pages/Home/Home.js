import React, { useContext, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
} from 'react-instantsearch-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

import "./Home.css";
import CustomNavbar from '../../lib/CustomNavbar/CustomNavbar';
import CustomPagination from '../../lib/CustomPagination/CustomPagination';
import CustomJumbotron from '../../lib/CustomJumbotron/CustomJumbotron';
import CustomHit from '../../lib/CustomHit/CustomHit';
import CustomTooltip from '../../lib/CustomTooltip/CustomTooltip';

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
              <CustomTooltip Home/>
              <OverlayTrigger
                className="tooltip-overlay"
                placement="bottom"
                overlay={<Tooltip id="recipe-search-tooltip">Input <strong>ingredients</strong>, get <strong>recipes!</strong></Tooltip>}
              >
                <SearchBox translations={{
                  placeholder: "Search recipes..."
                }} />
              </OverlayTrigger>
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