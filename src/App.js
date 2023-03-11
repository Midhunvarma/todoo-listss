import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
 

  //Add Task
  function AddTask() {
    if (task !== "") {
      setTaskList([...taskList, { task, index: `${task}-${Date.now()}` }]);
      setTask('');
    }

   
  }

  // Delete Task 
  const deleteTodo = (index) => {
    var newList = taskList;
    console.log(newList,index);
    newList.splice(index,1);
    setTaskList([...newList]);
  }

 

  return (
    <div className="App">
      <h1 className='title'> TODO LIST </h1>
      <input type='text' value={task} onChange={(e) => { setTask(e.target.value) }} />
    
      <button onClick={AddTask}   style={{ height: "30px" }}> ADD </button>
      {taskList.map((task,index) => {
        return <Tasks task={task.task} deleteTodo={deleteTodo} index={index}  />
      })}

    </div>
  );
}

export default App;