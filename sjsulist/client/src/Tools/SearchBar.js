import React from 'react';
import './SearchBar.css';
//import { Button } from '@material-ui/core';

const SearchBar = ({searchClicked, searching})=>{

    
    return(
        <div className="searchbar">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <input type="text" placeholder="Search.." class="w3-input w3-border searchInput" onChange={searching}></input>
            <button class="search-btn" onClick={searchClicked}>Search</button>
        </div>
    );
}
export default SearchBar;