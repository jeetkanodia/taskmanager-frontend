import { useEffect, useState } from "react";
import Task from "./components/Task";
import { addTask, getAllTask , updateTask , deleteTask} from "./utils/HandleApi";

function App() {

  const [task, setTask] = useState([])


  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")

  const [isUpdating, setIsUpdating] = useState(false)
  const [taskId, setTaskId] = useState("")

  useEffect(()=> {
    getAllTask(setTask)
  } ,[])
   
  const updateMode = (_id,title,description)=>{
    setIsUpdating(true)
    setTitle(title)
    setDescription(description)
    setTaskId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Task Manager</h1>
        <div className="top">
          <input type="text" placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <input type="text" placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
          
          <div 
          className="add" 
          onClick={isUpdating
            ? ()=> updateTask(taskId ,title,description,setTitle,setDescription,setTask, setIsUpdating) 
          : ()=>addTask(title,description,setTitle,setDescription,setTask)}
          >{isUpdating? "Update Task" : "Add Task"}
          </div>
        </div>

        <div className="list"> 

        {Array.isArray(task)
        ? task.map((item) => <Task
          key={item._id} 
          title={item.title}
          description={item.description}
          updateMode={()=>updateMode(item._id, item.title,item.description)}
          deleteTask={()=>deleteTask(item._id, setTask)}
          />)
          : null}

        </div>
      </div>
    </div>
  );
}

export default App;
