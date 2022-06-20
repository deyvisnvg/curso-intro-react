import React from "react";
import { FaClipboardCheck, FaPrescriptionBottle } from 'react-icons/fa'
// import { CompleteIcon } from '../TodoIcon/CompleteIcon'
// import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css'

function TodoItem(props) {

    // const onComplete = () => {
    //     alert('Ya completaste el TODO ' + props.text);
    // }

    // const onDelete = () => {
    //     alert('Eliminaste el TODO ' + props.text);
    // }

    return (
        <li className="TodoItem">
            {/* <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            /> */}
            {/* <span
                className={`icon-clipboard ${props.completed && 'Icon-check-active'}`}
                onClick={props.onComplete}>
            </span> */}
            <FaClipboardCheck
                className={`icon-clipboard ${props.completed && 'Icon-check-active'}`}
                onClick={props.onComplete}
            />
            <p className={`${props.completed && 'TodoItem-p-completed'}`}>{props.text}</p>
            <FaPrescriptionBottle
                className="icon-bin"
                onClick={props.onDelete}
            />
            {/* <DeleteIcon
                onDelete={props.onDelete}
            /> */}
        </li>
    )
}

export {
    TodoItem
}