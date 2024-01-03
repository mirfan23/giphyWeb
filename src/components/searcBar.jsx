import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onFormSubmit }) => {
 const [query, setQuery] = useState('');

 const handleChange = e => {
    setQuery(e.target.value);
 };

 const handleSubmit = e => {
    e.preventDefault();
    onFormSubmit(query);
 };

 return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input className="search-input" type="text" placeholder="Search your Giphy" value={query} onChange={handleChange} />
      <button className="search-button">Search</button>
    </form>
 );
};

export default SearchBar;
