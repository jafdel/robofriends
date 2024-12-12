import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div onChange={searchChange} className="pa2"><input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search robots" /></div>
    );
}

export default SearchBox;