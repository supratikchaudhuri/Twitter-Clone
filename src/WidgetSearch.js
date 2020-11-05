import React from 'react'
import "./WidgetSearch.css";
import SearchIcon from '@material-ui/icons/Search';

function WidgetSearch() {
    return (
        <div className="widget-search">
            <SearchIcon className="search-icon"/>
            <input placeholder="Seach Twitter" type="text"></input>
        </div>
    )
}

export default WidgetSearch
