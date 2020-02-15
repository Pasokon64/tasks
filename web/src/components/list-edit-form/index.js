import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';

function ListEditForm({ onClose, onEdit, onDelete, list }) {

    const [title, setTitle] = useState(list.title);

    function cancel() {
        onClose();
    }

    async function listEdit() {
        const token = localStorage.getItem('token');

        const response = await api.put(`/list/update/${list._id}`, {
            title: title
        }, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        onEdit(response.data);
    }

    async function listDelete() {
        const token = localStorage.getItem('token');

        const response = await api.delete(`/list/delete/${list._id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        onDelete(response.data);
    }

    return (
        <form className="form">
            <h2>List</h2>
            <label>Name</label><br></br>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>
            <div className="button-group">
                <div className="group-1">
                    <button type="button" className="primary-button" onClick={listEdit}>save</button>
                    <button type="button" className="danger-button" onClick={listDelete}>delete</button>
                </div>
                <button type="button" className="secondary-button" onClick={cancel}>cancel</button>
            </div>
        </form>
    );
}

export default ListEditForm;