import {useState} from 'react'
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

  const [showAddTask,setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([
      {
          id:1,
          text:'Doctor Appointment',
          day:'Feb 5th at 2:30pm',
          remainder:true
      },
      {
          id:2,
          text:'Doctor Appointment',
          day:'Feb 5th at 2:30pm',
          remainder:true
      },
      {
          id:3,
          text:'Doctor Appointment',
          day:'Feb 5th at 2:30pm',
          remainder:true
      }
  ])

  //DeleteTask
  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleRemainder = (id) =>{
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task,remainder:!task.remainder}:task)
    )
  }
  //AddTask
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
    <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length >0 ?<Tasks  tasks={tasks} OnDelete={deleteTask} onToggle={toggleRemainder}/>:'No Task in Last  '}
    </div>
  );
}

export default App;
