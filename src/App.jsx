import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'


function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
        id: 1, 
        text: 'Follow-up meeting',
        date: 'Thursday 9:00am' ,
        done: true,
    },
    {
        id: 2, 
        text: 'Grocery shopping',
        date: 'Friday 3:00pm' ,
        done: false,
    },
    {
        id: 3, 
        text: 'Wash car',
        date: 'Saturday 11:30am' ,
        done: false,
    }
    ]

)

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = {id, ...task}

  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
 setTasks(tasks.filter((task)=> task.id !== id))
}

const doneTask = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {
    ...task, done : !task.done
  }: task ))
}

  return (
    <div className='container'>
      <Header title='Daily Tasks'  onAdd={()=> setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={doneTask}/> : 'There are no tasks to show'}
    </div>
  )
}

export default App