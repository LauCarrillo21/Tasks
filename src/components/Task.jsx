import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div className={`task ${task.done ? 'done' : ''}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: "#870000", cursor: 'pointer' }} /> </h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
