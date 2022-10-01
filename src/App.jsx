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
        text: 'Finish React project',
        date: 'Sep 30 2022' ,
        done: true,
    },
    {
        id: 2, 
        text: 'Grocery shopping',
        date: 'Oct 2 2022' ,
        done: false,
    },
    {
        id: 3, 
        text: 'Wash car',
        date: 'Oct 5 2022' ,
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
      <Header title='Tasks'  onAdd={()=> setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={doneTask}/> : 'There are no tasks to show'}
    </div>
  )
}

export default App