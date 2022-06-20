import React from "react";
import './TodoYourTaks.css'

function TodoYourTaks(props) {
    return (
        <div className="TodoYourTaks">
            {props.children}
        </div>
    )
}

export {
    TodoYourTaks
}