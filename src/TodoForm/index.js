import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { setOpenModal, addTodo } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        // console.log(event)
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit} className="formNewTodo">
            <label>Escribe tu Nuevo TODO</label>
            <textarea
                // key={setNewTodoValue}
                value={newTodoValue}
                onChange={onChange}
                placeholder="Conquistar el mundo"
                required
            >
                {newTodoValue}
            </textarea>
            <div className="buttonNewTodo">
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };