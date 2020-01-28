import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  function addTask() {
    if (taskInput.trim().length > 0)
      setTasks([...tasks, taskInput]);
  }

  return (
    <div className="App">
      <div>
        <input onChange={e => setTaskInput(e.target.value)} value={taskInput} type="text"/>
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <h2>Tasks</h2>
        {tasks.map(task => (
          <li>{task}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
