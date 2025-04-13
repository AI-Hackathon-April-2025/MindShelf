import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        if (onSearch) {
            onSearch(searchTerm);
            setSearchTerm('')
        }
    }
 
    return (
        <div className='searchBar'>
            <input
                type="text"
                placeholder="Search your mindfiles..."
                value={searchTerm}
                onChange={handleChange}
                className='searchBar'
            />
            <button onClick={handleSearchClick} className = "searchButton">
                    🔍
            </button>       
        </div>
    );
}

export default SearchBar