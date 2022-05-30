import React from 'react';
import { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClcik(searchTerm);
  };

  return (
    <div className="field">
      <form onSubmit={handleSubmit}>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
