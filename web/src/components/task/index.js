import React from 'react';

import './style.css';
import { useState } from 'react';
import api from '../../services/api';

function Task({ task, onEdit }) {

    const [completed, setCompleted] = useState(task.completed);
    const [taskState, setTaskState] = useState(task);

    function handleEditTask(e) {
        if (e.target.className !== "checkbox") {
            onEdit(taskState);
        }
    }

    async function handleChangeState(e) {
        setCompleted(e.target.checked);

        const token = localStorage.getItem('token');

        const response = await api.put(`/task/update/${task._id}`, {
            completed: e.target.checked
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setTaskState(response.data);
    }

    return (
        <div key="" className="task" onClick={handleEditTask}>
            <span>{task.title}</span>
            <input className="checkbox" type="checkbox" checked={completed} onChange={e => handleChangeState(e)}/>
        </div>
    );
}

export default Task;