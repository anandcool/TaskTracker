import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task,OnDelete,onToggle}) => {
    return (
        <div className={`task ${task.remainder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={()=>OnDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
