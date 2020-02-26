import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';

function TaskEditForm ({ task, onEdit, onDelete, onClose }) {

    const [title, setTitle] = useState(task.title);
    const [completed, setCompleted] = useState(task.completed);

    function cancel() {
        onClose();
    }

    async function taskDelete() {
        const token = localStorage.getItem('token');

        const deletedTask = await api.delete(`/task/delete/${task._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const list = await api.get(`/list/${deletedTask.data.list}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        onDelete(list.data);
    }

    async function taskEdit() {
        const token = localStorage.getItem('token');

        const response = await api.put(`/task/update/${task._id}`, {
            title,
            completed
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        onEdit(response.data);
    }

    return (
        <form className="form">
            <h2>Task</h2>
            <label>Name</label><br></br>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <div className="checkbox-container">
                <label>completed</label>
                <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)}/>
            </div>
            <div className="button-group">
                <div className="group-1">
                    <button type="button" className="primary-button" onClick={taskEdit}>save</button>
                    <button type="button" className="danger-button" onClick={taskDelete}>delete</button>
                </div>
                <button className="secondary-button" onClick={cancel}>cancel</button>
            </div>
        </form>
    );
}

export default TaskEditForm;