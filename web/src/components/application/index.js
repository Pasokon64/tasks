import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import List from '../list';
import ListForm from '../list-form';
import ListEditForm from '../list-edit-form';
import TaskEditForm from '../task-edit-form';
import Profile from '../profile';

import '../../global.css';
import './style.css';

function Application () {
    const [lists, setLists] = useState([]);
    const [editForm, setEditForm] = useState({});

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

        window.update = true;

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
        setEditForm({});
    }

    function handleEditList(list) {
        const listsCopy = [...lists];
        const index = listsCopy.findIndex(item => item._id === list._id);

        listsCopy[index] = list;

        setLists(listsCopy);
        handleChangeFormList(list);
    }

    function handleChangeFormList(list) {
        setEditForm({ type: 'list', obj: list });
    }

    function handleDeleteTask() {
        // TODO: update only the deleted task
        window.update = !window.update;
        setEditForm({});
    }

    function handleEditTask(task) {
        // TODO: update only the deleted task
        window.update = !window.update;
        setEditForm({ type: 'task', obj: task });
    }

    function handleChangeFormTask(task) {
        setEditForm({ type: 'task', obj: task });
    }

    function handleCancelForm() {
        setEditForm({});
    }

    function Form() {
        switch (editForm.type) {
            case 'list':
                return <ListEditForm 
                            onClose={handleCancelForm} 
                            onDelete={handleDeleteList}
                            onEdit={handleEditList}
                            list={editForm.obj}/>
            case 'task':
                return <TaskEditForm 
                            onClose={handleCancelForm}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            task={editForm.obj}/>
            default:
                return <ListForm onSubmit={handleAddList}/>
        }
    }

    return (
        <div id="App">
        <aside>
            <Profile/>
            <Form/>
        </aside>
        <main>
            {
                lists.map(list => (
                    <List key={list._id} list={list} onEdit={handleChangeFormList} onEditTask={handleChangeFormTask}/>
                ))
            }
        </main>
        </div>
    );
}

export default Application;