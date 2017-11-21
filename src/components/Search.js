import React from 'react';
import '../styles/Search.css';
import movieApi from '../util/movieApi';

const Search = ({ searchQuery, handleSearchQueryChange, handleSearchQuerySubmit }) => {
    return (
        <div className="search">
            <input
                className="search-field"
                type="text"
                value={ searchQuery }
                onChange={ handleSearchQueryChange }
            />
            <button
                className="search-button"
                type="button"
                onClick={ handleSearchQuerySubmit }
            >
                Search
            </button>
        </div>
    )
};

export default Search;