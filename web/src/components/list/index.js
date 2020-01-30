import React, { useState } from 'react';
import Task from '../task';

import './style.css';

function NewTaskInput({ onSubmit }) {

    const [taskInput, setTaskInput] = useState('');
    const [newTaskState, setNewTaskState] = useState(false);

    function addTask() {
        onSubmit(taskInput);
    }

    if (newTaskState) {
        return (
            <div>
                <input onChange={e => setTaskInput(e.target.value)} value={taskInput} type="text"/>
                <button onClick={addTask}>add</button>
                <button onClick={() => setNewTaskState(false)}>cancel</button>
            </div>
        )
    }
    else {
        return (
            <button onClick={() => setNewTaskState(true)}>New task</button>
        )
    } 
}

function List({ title }) {
    const [tasks, setTasks] = useState([]);

    function onAddTask(taskInput) {
        if (taskInput.trim().length > 0)
            setTasks([...tasks, taskInput]);
    }

    return (
        <div className="list">
            <h3 className="title">{title}</h3>
            {
                tasks.map(task => (
                    <Task title={task}/>
                ))
            }
            <NewTaskInput onSubmit={onAddTask}/>
        </div>
    );
}

export default List;