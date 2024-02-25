import {useState} from "react";

function SearchInput({ searchValue, onSearch }) {

    function onValueChange(e) {
        onSearch(e.target.value)
    }
    return(
        <div>
            <input value={searchValue}
                   onChange={onValueChange}/>
        </div>
    )
}

export default SearchInput