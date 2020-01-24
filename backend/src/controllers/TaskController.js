const mongoose = require('mongoose');

const Task = require('../models/Task');

module.exports = {

    async index(req, res) {
        try {
            const tasks = await Task.find({ user: req.userId });
            res.send({tasks});
        }
        catch (err) {
            return res.status(400).send({ error: 'Error getting tasks' });
        }
    },

    async create(req, res) {
        const { title } = req.body;

        try{
            const task = await Task.create({ title, user: req.userId });
            res.send({task});
        }
        catch (err) {
            return res.status(400).send({ error: 'Error creating task' });
        }
    }
}