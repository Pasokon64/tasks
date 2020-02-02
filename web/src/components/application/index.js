import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import List from '../list';
import ListForm from '../list-form';
import ListEditForm from '../list-edit-form';
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

    async function handleAddList(title) {
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

    function handleDeleteList(list) {
        const listsCopy = [...lists];
        const filteredList = listsCopy.filter(item => item._id !== list._id);

        setLists(filteredList);
    }

    return (
        <div id="App">
        <aside>
            <Profile/>
            <ListForm onSubmit={handleAddList}/>
            <ListEditForm/>
        </aside>
        <main>
            {
                lists.map(list => (
                    <List key={list._id} list={list} onDelete={handleDeleteList}/>
                ))
            }
        </main>
        </div>
    );
}

export default Application;