import React, { useState } from 'react';
import List from '../list';
import ListForm from '../list-form';
import Profile from '../profile';

import '../../global.css';
import './style.css';

function Application () {
    const [lists, setLists] = useState([]);

    function addList(title) {
        setLists([...lists, title]);
    }

    return (
        <div id="App">
        <aside>
            <Profile/>
            <ListForm onSubmit={addList}/>
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