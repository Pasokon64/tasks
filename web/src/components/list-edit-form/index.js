import React from 'react';

import './style.css';

function ListEditForm({ onClose }) {

    function cancel() {
        onClose();
    }

    return (
        <form className="form">
            <h2>List</h2>
            <label>Name</label><br></br>
            <input type="text"/>
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

export default ListEditForm;