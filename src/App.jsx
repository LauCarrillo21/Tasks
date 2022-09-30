import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState(
    [
        {
        id: 1, 
        text: 'Finish React project',
        date: 'Sep 30 2022' ,
        finished: true,
    },
    {
        id: 2, 
        text: 'Grocery shopping',
        date: 'Oct 2 2022' ,
        finished: false,
    },
    {
        id: 3, 
        text: 'Wash car',
        date: 'Oct 5 2022' ,
        finished: false,
    }
    ]

)

const deleteTask = (id) => {
 setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <div className='container'>
      <Header title='Tasks' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'There are no tasks to show'}
    </div>
  )
}

export default App