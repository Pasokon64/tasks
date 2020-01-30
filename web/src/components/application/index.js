import React, { useState } from 'react';

import '../../global.css';
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

function Application () {
    const [tasks, setTasks] = useState([]);
    const [lists, setLists] = useState([]);

    const [listInput, setListInput] = useState('');

    function addList() {
        if (listInput.trim().length > 0)
            setLists([...lists, listInput]);
    }

    function onAddTask(taskInput) {
        if (taskInput.trim().length > 0)
            setTasks([...tasks, taskInput]);
    }

    return (
        <div id="App">
        <aside>
            <div>
                <h3>Nome do usuário</h3>
                <p>Email do usuário</p>
            </div>
            <div id="newList">
                <h2>New List</h2>
                <label>Name</label><br></br>
                <input onChange={e => setListInput(e.target.value)} value={listInput} type="text"/>
                <button onClick={addList}>Add</button>
            </div>
        </aside>
        <main>
            {/* <div className="list">
                <h3 className="title">Tasks</h3>
                {tasks.map(task => (
                <div key="" className="task"><span>{task}</span><input type="checkbox"/></div>
                ))}
            </div> */}
            {
                lists.map(list => (
                    <div className="list">
                        <h3 className="title">{list}</h3>
                        {
                            tasks.map(task => (
                                <div key="" className="task"><span>{task}</span><input type="checkbox"/></div>
                            ))
                        }
                        <NewTaskInput onSubmit={onAddTask}/>
                    </div>
                ))
            }
        </main>
        </div>
    );
}

export default Application;