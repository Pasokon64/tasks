import React, { useState } from 'react';

import './style.css';

function ListEditForm({ onClose }) {

    const [title, setTitle] = useState('');

    function cancel() {
        onClose();
    }

    async function taskEdit() {
        console.log(title);
    }

    async function taskDelete() {
        return;
    }

    return (
        <form className="form">
            <h2>List</h2>
            <label>Name</label><br></br>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
            <div className="button-group">
                <div className="group-1">
                    <button type="button" className="primary-button" onClick={taskEdit}>save</button>
                    <button type="button" className="danger-button">delete</button>
                </div>
                <button type="button" className="secondary-button" onClick={cancel}>cancel</button>
            </div>
        </form>
    );
}

export default ListEditForm;