import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';

function TaskEditForm ({ task, onDelete, onClose }) {

    const [title, setTitle] = useState(task.title);

    function cancel() {
        onClose();
    }

    async function taskDelete() {
        const token = localStorage.getItem('token');

        const response = await api.delete(`/task/delete/${task._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        onDelete(response.data);
    }

    return (
        <form className="form">
            <h2>Task</h2>
            <label>Name</label><br></br>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <div className="checkbox-container">
                <label>completed</label>
                <input type="checkbox"/>
            </div>
            <div className="button-group">
                <div className="group-1">
                    <button type="button" className="primary-button">save</button>
                    <button type="button" className="danger-button" onClick={taskDelete}>delete</button>
                </div>
                <button className="secondary-button" onClick={cancel}>cancel</button>
            </div>
        </form>
    );
}

export default TaskEditForm;