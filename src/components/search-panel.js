import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    return <input placeholder="type to search" className="search-input" />
    // <Consumer>
    //     {({search, searchHandler}) => {
    //         return (<input onChange={(e) => {
    //             searchHandler(e.target.value);
    //         }} placeholder="search" value={search} />)
    //     }}
    // </Consumer>
}

export default SearchPanel;