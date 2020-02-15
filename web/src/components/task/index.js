import React from 'react';

import './style.css';

function Task({ task, onEdit }) {

    function handleEditTask(e) {
        if (e.target.className != "checkbox") {
            onEdit(task);
        }
    }

    return (
        <div key="" className="task" onClick={handleEditTask}>
            <span>{task.title}</span>
            <input className="checkbox" type="checkbox"/>
        </div>
    );
}

export default Task;