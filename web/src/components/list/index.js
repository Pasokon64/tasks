import React, { useState, useEffect } from 'react';
import ListInput from '../list-input';
import Task from '../task';

import api from '../../services/api';

import './style.css';

function List({ list }) {
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
    }, []);

    async function onAddTask(taskInput) {
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

    return (
        <div className="list">
            <h3 className="title">{list.title}</h3>
            {
                tasks.map(task => (
                    <Task key={task._id} title={task.title}/>
                ))
            }
            <ListInput onSubmit={onAddTask}/>
        </div>
    );
}

export default List;