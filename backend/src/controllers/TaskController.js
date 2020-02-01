const mongoose = require('mongoose');

const Task = require('../models/Task');

module.exports = {

    async index(req, res) {
        try {
            const tasks = await Task.find({ user: req.userId });
            res.send(tasks);
        }
        catch (err) {
            return res.status(400).send({ error: 'Error getting tasks' });
        }
    },

    async listTasks(req, res) {
        try {
            const tasks = await Task.find({ list: req.params.list });
            res.send(tasks);    
        } 
        catch (err) {
            return res.status(400).send({ error: 'Error getting tasks from list' });
        }
    },

    async create(req, res) {
        const { title, list } = req.body;

        try{
            const task = await Task.create({ title, list, user: req.userId });
            res.send(task);
        }
        catch (err) {
            return res.status(400).send({ error: 'Error creating task' });
        }
    },

    async delete(req, res) {
        //TODO: check if user is owner of task
        try {
            const task = await Task.findByIdAndDelete(req.params.id);

            res.send(task);
        } 
        catch (err) {
            return res.status(400).send({ error: 'Error deleting task' });
        }
    }
}