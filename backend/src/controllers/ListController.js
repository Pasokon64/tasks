const List = require('../models/List');
const Task = require('../models/Task');

module.exports = {

    async index(req, res) {
        try {
            const lists = await List.find({ user: req.userId });
            res.send(lists);
        } 
        catch (err) {
            return res.status(400).send({ error: 'Error getting lists' });    
        }
    },

    async show(req, res) {
        //TODO: check if user is owner of list
        try {
            const list = await List.findById(req.params.id);
            res.send(list);
        }
        catch (err) {
            return res.status(400).send({ error: 'Error getting list' });
        }
    },

    async create(req, res) {
        const { title } = req.body;

        try {
            const list = await List.create({ title, user: req.userId });
            res.send(list);
        } 
        catch (err) {
            return res.status(400).send({ error: 'Error creating list' });
        }
    },

    async update(req, res) {
        //TODO: check if user is owner of task
        const { title } = req.body;

        try {
            const list = await List.findByIdAndUpdate(req.params.id, { title }, { new: true });

            res.send(list);
        } 
        catch (err) {
            return res.status(400).send({ error: 'Error updating list' });    
        }
    },

    async delete(req, res) {
        //TODO: check if user is owner of task
        try {
            const list = await List.findByIdAndRemove(req.params.id);
            await Task.remove({ list: list._id });
            
            res.send(list);
        } 
        catch (err) {
            return res.status(400).send({ error: 'Error deleting list' });    
        }
    }
}