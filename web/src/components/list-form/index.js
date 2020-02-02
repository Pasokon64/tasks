import React, { useState } from 'react';
import './style.css';

function ListForm({ onSubmit }) {
    const [title, setTitle] = useState('');

    function addList(e) {
        e.preventDefault();

        if (title.trim().length > 0)
            onSubmit(title);

        setTitle('');
    }

    return (
        <form className="form" onSubmit={e => addList(e)}>
            <h2>New List</h2>
            <label>Name</label><br></br>
            <input onChange={e => setTitle(e.target.value)} value={title} type="text"/>
            <button className="primary-button">add</button>
        </form>
    );
}

export default ListForm;