import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [done, setDone] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task description 😀')
            return
        }

        onAdd({ text, date, done })

        setText('')
        setDate('')
        setDone(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder='Add a task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Date </label>
                <input
                    type="text"
                    placeholder='Type a date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label> Done </label>
                <input
                    type="checkbox"
                    checked={done}
                    value={done}
                    onChange={(e) => setDone(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value='Save' className='btn btn-block' />
        </form>
    )
}

export default AddTask