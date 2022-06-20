import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoContainer } from '../TodoContainer';
import { TodoCreateTaks } from '../TodoCreateTaks';
import { TodoYourTaks } from '../TodoYourTaks';
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext);
    return (
        /*
            React para sus cálculos internos nos permite enviar una etiqueta "div" por componente, 
            pero hay un problema con esto ya que tendríamos div innecesarios por cada componente
        */
        //  Solución: Con React.Fragment enviamos todos los componentes que queramos
        <React.Fragment>

            <TodoContainer>
                <TodoCreateTaks />

                <TodoYourTaks>
                    <TodoCounter
                    // total={totalTodos}
                    // completedTodos={completedTodos}
                    />

                    <TodoSearch
                    // searchValue={searchValue}
                    // setSearchValue={setSearchValue}
                    />

                    {/* <TodoContext.Consumer>
                        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => ( */}
                    <TodoList>
                        {error && <TodoError error={error}></TodoError>}
                        {
                            loading && Array(4).fill('Cargando TODOs... ').map((todoVacio, i) => (
                                <TodoLoading
                                    key={i}
                                    text={todoVacio}
                                />
                            ))
                        }
                        {(!loading && !searchedTodos.length) && <TodoEmpty></TodoEmpty>}
                        {
                            searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            ))
                        }
                    </TodoList>
                    {/* )}
                    </TodoContext.Consumer> */}

                    {openModal && (
                        <Modal>
                            {/* <p> {searchedTodos[0]?.text} </p> */}
                            <TodoForm></TodoForm>
                        </Modal>
                    )}



                    <CreateTodoButton />
                </TodoYourTaks>

            </TodoContainer>

        </React.Fragment>
    )
}

export {
    AppUI
}