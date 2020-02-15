import React, { useState } from 'react';

import './style.css';

function TaskEditForm ({ task, onClose }) {

    const [title, setTitle] = useState(task.title);

    function cancel() {
        onClose();
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
                    <button className="primary-button">save</button>
                    <button className="danger-button">delete</button>
                </div>
                <button className="secondary-button" onClick={cancel}>cancel</button>
            </div>
        </form>
    );
}

export default TaskEditForm;