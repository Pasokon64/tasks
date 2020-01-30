import React, { useState } from 'react';
import List from '../list';

import '../../global.css';
import './style.css';

function Application () {
    const [lists, setLists] = useState([]);
    const [listInput, setListInput] = useState('');

    function addList() {
        if (listInput.trim().length > 0)
            setLists([...lists, listInput]);
    }

    return (
        <div id="App">
        <aside>
            <div>
                <h3>Nome do usuário</h3>
                <p>Email do usuário</p>
            </div>
            <div id="newList">
                <h2>New List</h2>
                <label>Name</label><br></br>
                <input onChange={e => setListInput(e.target.value)} value={listInput} type="text"/>
                <button onClick={addList}>Add</button>
            </div>
        </aside>
        <main>
            {
                lists.map(list => (
                    <List title={list}/>
                ))
            }
        </main>
        </div>
    );
}

export default Application;