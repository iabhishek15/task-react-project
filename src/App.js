import Header from './components/Header' 
import Tasks from './components/Tasks' 
import { useState } from "react"

function App() {
  const name = "Abhishek Singh"
  const [tasks,setTasks] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
    }
  ])

  //delete task
  const onDelete = (id) => {
    console.log(id)
  }

  return (
    <div className='app'>
      <div className="container">
        <Header title={"Task Tracker"}/>
        {/* <h1>Hello, From {name}</h1> */}
        <Tasks tasks={tasks} onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default App;
