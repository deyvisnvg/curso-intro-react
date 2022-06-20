import React from "react";
import './TodoLoading.css'

function TodoLoading(props) {
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">{props.text}</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
    )
}

export { TodoLoading }