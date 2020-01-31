import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import List from '../list';
import ListForm from '../list-form';
import Profile from '../profile';

import '../../global.css';
import './style.css';

function Application () {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getLists() {
            const response = await api.get('/list/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            setLists(response.data);
        }

        getLists();
    }, []);

    async function addList(title) {
        const token = localStorage.getItem('token');

        const response = await api.post('/list/create', {
            title: title
        },
        {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        });

        if (response)     
            setLists([...lists, response.data]);
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
                    <List key={list._id} title={list.title}/>
                ))
            }
        </main>
        </div>
    );
}

export default Application;