import React from "react";
import './TodoContainer.css'

function TodoContainer(props) {
    return (
        <div className="TodoContainer">
            {props.children}
        </div>
    )
}

export {
    TodoContainer
}