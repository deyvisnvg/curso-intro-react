import React from "react";
import { TodoContext } from "../TodoContext";
import { FaPlus } from 'react-icons/fa'
import './CreateTodoButton.css';

function CreateTodoButton() {

    const { setOpenModal } = React.useContext(TodoContext);
    const onClickButton = msg => setOpenModal(precState => !precState);

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton()}
        // onClick={() => console.log('click')}
        >
            <FaPlus />
        </button>
    )
}

export {
    CreateTodoButton
}