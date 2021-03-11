import React from 'react';

import "./CustomPagination.css";

import { connectPagination } from 'react-instantsearch-dom';

const CustomPagination = ({ currentRefinement, nbPages, refine, createURL }) => (
  <ul className="pagination-list">
    {new Array(nbPages).fill(null).map((_, index) => {
      const page = index + 1;
      const style = {
        fontWeight: currentRefinement === page ? 'bold' : '',
        color: currentRefinement === page ? '#fcc431': '#000'
      };

      return (
        <li className="pagination-item" key={index}>
          <a
            href={createURL(page)}
            style={style}
            onClick={event => {
              event.preventDefault();
              refine(page);
            }}
          >
            {page}
          </a>
        </li>
      );
    })}
  </ul>
);

export default connectPagination(CustomPagination);