import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const Task = ({title, description, updateMode , deleteTask }) => {
    return (
        <div className="task">
            <div className="Title">{title}</div>
            <div className="description">{description}</div>
            <div className='icons'>
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={deleteTask} />
            </div>
        </div>
    )
}

export default Task