const List = require('../models/List');

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

    async create(req, res) {
        const { title } = req.body;

        try {
            const list = await List.create({ title, user: req.userId });
            res.send(list);
        } 
        catch (err) {
            return res.status(400).send({ error: 'Error creating list' });
        }
    }
}