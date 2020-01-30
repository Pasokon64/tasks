import React, { useState } from 'react';

function ListInput({ onSubmit }) {

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

export default ListInput;