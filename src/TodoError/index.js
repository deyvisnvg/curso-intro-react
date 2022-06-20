import React from "react";

function TodoError({ error }) {
    return (
        <div>
            <h2>We're sorry</h2>
            <p>An error occurred while loading your TODOs</p>
        </div>
    )
}

export { TodoError }