import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <div className='searchBar'>
            <input
                type="text"
                placeholder="Search your mindfiles..."
                value={searchTerm}
                onChange={handleChange}
                className='searchBar'
            />
            <button>
                Search
            </button>
        </div>
    );
}

export default SearchBar