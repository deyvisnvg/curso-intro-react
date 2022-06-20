import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const { totalTodos: total, completedTodos } = React.useContext(TodoContext);

    return (
        // <h1>Mis Tareas</h1>
        <div className="TodoCounter">
            <h1>Mis tareas</h1>
            <h3>Has completado {completedTodos} de {total} TODOs</h3>
        </div>

    );
}

// export default TodoCounter;
export {
    TodoCounter
}