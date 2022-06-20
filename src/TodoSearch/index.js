import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = event => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return [
        <input type="search" key={setSearchValue} placeholder="Buscar tarea"
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
        // onChange={() => setState("Alexandra")}
        />,
        <p key={searchValue}>{searchValue}</p>
    ]
}

export {
    TodoSearch
}