import React from "react";
import './TodoEmpty.css'
import logo from '../primertodo.png'

function TodoEmpty() {
    return (
        <div>
            <img src={logo} className='img-logo' alt='logo'></img>
        </div>
    )
}

export { TodoEmpty }