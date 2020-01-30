import React from 'react';

import './style.css';

function Task({ title }) {

    return (
        <div key="" className="task"><span>{title}</span><input type="checkbox"/></div>
    );
}

export default Task;