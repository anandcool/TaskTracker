import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {

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

  const deleteTask = (id) =>{
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
    <Header title="Task Tracker"/>
    {tasks.length >0 ?<Tasks  tasks={tasks} OnDelete={deleteTask}/>:'No Task in Last  '}
    </div>
  );
}

export default App;
