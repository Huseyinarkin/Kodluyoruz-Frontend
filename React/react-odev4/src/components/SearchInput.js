import React from 'react'
import './SearchInput.css';

function SearchInput(props) {
    return (
        <div className="component-search-input">
            <div>
                <input onChange={props.handleSearchChange}/>
            </div>
        </div>
    )
}

export default SearchInput