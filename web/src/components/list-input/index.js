import React, { useState } from 'react';
import './style.css';

function ListInput({ onSubmit }) {

    const [taskInput, setTaskInput] = useState('');
    const [newTaskState, setNewTaskState] = useState(false);

    function addTask() {
        if (taskInput.trim().length > 0) {
            onSubmit(taskInput);
            onCancel();
        }
    }

    function onCancel() {
        setNewTaskState(false);
        setTaskInput('');
    }

    if (newTaskState) {
        return (
            <div className="task-form">
                <input autoFocus onChange={e => setTaskInput(e.target.value)} value={taskInput} type="text"/>
                <div className="button-div">
                    <button onClick={addTask}>add</button>
                    <button className="cancel" onClick={onCancel}>cancel</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div class="task-form button-div">
                <button onClick={() => setNewTaskState(true)}>New task</button>
            </div>
        )
    } 
}

export default ListInput;