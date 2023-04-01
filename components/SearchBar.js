import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for topics"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      {/* Add your CSS here or use a CSS-in-JS solution */}
    </form>
  );
};

export default SearchBar;
