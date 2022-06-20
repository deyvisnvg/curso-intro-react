import React from "react";
import { TodoContext } from "../TodoContext";
import { FaPlus } from 'react-icons/fa'
import logo from '../logo.svg';
import './TodoCreateTaks.css';

function TodoCreateTaks() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo } = React.useContext(TodoContext);

    const onChange = (event) => setNewTodoValue(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    }

    return (
        <div className="TodoCreateTaks">
            <form onSubmit={onSubmit}>
                <h1>Crear nueva tarea</h1>
                <div>
                    <p>Tarea</p>
                    <input
                        type="text"
                        placeholder="Escribe tu tarea aquí"
                        onChange={onChange}
                        value={newTodoValue}
                        required
                    >
                    </input>
                </div>
                <button type="submit">Crear Tarea <FaPlus /></button>
                <img src={logo} className="App-logo" alt="logo" />
            </form>
        </div>
    )
}

export {
    TodoCreateTaks
}