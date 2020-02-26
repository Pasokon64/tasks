import React, { useState, useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import ListInput from '../list-input';
import Task from '../task';

import CustomIcon from '../custom-icon';
import api from '../../services/api';

import './style.css';

function List({ list, onEdit, onEditTask }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getTasks() {
            const response = await api.get(`/task/${list._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response)
                setTasks(response.data);
        }

        getTasks();
    }, [window.update]);

    async function handleAddTask(taskInput) {
        const token = localStorage.getItem('token');

        const response = await api.post('/task/create/', {
            title: taskInput,
            list: list._id
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response)
            setTasks([...tasks, response.data]);
    }

    async function handleEditList() {
        onEdit(list);
    }

    function handleEditTask(task) {
        onEditTask(task);
    }

    return (
        <div className="list">
            <div className="title-bar">
                <h3 className="title">{list.title}</h3>
                <button onClick={handleEditList}><CustomIcon Icon={MdEdit}/></button>
            </div>
            {
                tasks.map(task => (
                    <Task key={task._id} task={task} onEdit={handleEditTask}/>
                ))
            }
            <ListInput onSubmit={handleAddTask}/>
        </div>
    );
}

export default List;