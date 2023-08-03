import axios from 'axios'
const baseUrl = "https://taskmanager-backend-t1vf.onrender.com"

const getAllTask = (setTask) => {
    axios
    .get(baseUrl)
    .then(({data}) => { 
        setTask(data)
    })
}

const addTask = (title,description, setTitle,setDescription, setTask) => {
    axios
    .post(`${baseUrl}/save` , {title,description})
    .then((data)=> {
        console.log(data);
        setTitle("")
        setDescription("")
        getAllTask(setTask)
    })
    .catch((err)=> console.log(err))
}

const updateTask = (taskId, title,description, setTitle,setDescription, setTask , setIsUpdating)  => {
    axios
    .post(`${baseUrl}/update` , {_id:taskId , title,description})
    .then((data)=> {
        setTitle("")
        setDescription("")
        setIsUpdating(false)
        getAllTask(setTask)
    })
    .catch((err)=> console.log(err))
}

const deleteTask = (taskId, setTask)  => {
    axios
    .post(`${baseUrl}/delete` , {_id:taskId})
    .then((data)=> {
        getAllTask(setTask)
    })
    .catch((err)=> console.log(err))
}

export {getAllTask , addTask, updateTask , deleteTask}