import React from "react";
import { useLocalStorage } from "./localStorage";

const TodoContext = React.createContext();

// const defaultTodos = [
//     { text: 'Partida de Ajedrez con Elon Musk', completed: true },
//     { text: 'Tomar el curso de intro a React', completed: false },
//     { text: 'Partida de Half Life con Mark Zuckerberg', completed: false },
//     { text: 'Rutina de ejercicios en el Gimnasio', completed: true }
// ]

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    // const [leopardo, saveLeopardo] = useLocalStorage('LEOPARDO_V1', 'Leopardo');
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    // let searchedTodos = [];

    // if (!searchValue.length >= 1) {
    //   searchedTodos = todos
    // } else {
    //   searchedTodos = todos.filter(todo => {
    //     const todoText = todo.text.toLowerCase();
    //     const searchText = searchValue.toLocaleLowerCase();

    //     return todoText.includes(searchText);
    //   })
    // }

    const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodo = text => {
        alert('Ya completaste el TODO ' + text);
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; // Un Array injectados con todos los TODOs(tudus) que teníamos antes, es como tener una copia.
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const addTodo = text => {
        alert('New TODO agregado: ' + text);
        const newTodos = [...todos]; // Un Array injectados con todos los TODOs(tudus) que teníamos antes, es como tener una copia.
        newTodos.push({
            completed: false,
            text: text
        });
        saveTodos(newTodos);
    }

    const deleteTodo = text => {
        alert('Eliminaste el TODO ' + text);
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]; // Un Array injectados con todos los TODOs(tudus) que teníamos antes, es como tener una copia.
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        // Todas las propiedades que queramos compartir deben estar en value, como
        // queremos compartir varias propiedades "value" va a ser un objeto {}.
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }

{/* <TodoContext.Consumer></TodoContext.Consumer> */ }