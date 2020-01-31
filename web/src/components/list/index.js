import React, { useState } from 'react';
import ListInput from '../list-input';
import Task from '../task';

import './style.css';

function List({ title }) {
    const [tasks, setTasks] = useState([]);

    function onAddTask(taskInput) {
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
            <ListInput onSubmit={onAddTask}/>
        </div>
    );
}

export default List;