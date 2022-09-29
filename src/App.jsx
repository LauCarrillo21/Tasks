import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState(
    [
        {
        id: 1, 
        text: 'Molly',
        date: 'Feb 2 2022' ,
        finished: true,
    },
    {
        id: 2, 
        text: 'Chony',
        date: 'Feb 2 2022' ,
        finished: false,
    },
    {
        id: 3, 
        text: 'Holly',
        date: 'Feb 2 2022' ,
        finished: false,
    }
    ]

)

  return (
    <div className='container'>
      <Header title='Tasks' />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App