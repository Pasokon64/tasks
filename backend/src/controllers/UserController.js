const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

module.exports = {

    async index(req, res) {
        const users = await User.find();
        res.send(users);
    },

    async auth(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(403).send({ error: 'User not found' });

        if (await bcrypt.compare(password, user.password))
            return res.status(403).send({ error: 'Invalid password' });

        user.password = undefined;
        res.send({ 
            user,
            token: generateToken({ id: user.id }) 
        });
    },

    async register(req, res) {
        const { email } = req.body;

        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' });

        const user = await User.create(req.body);

        if (!user) 
            return res.status(400).send({ error: 'Registration failed' });

        user.password = undefined;
        res.send({ 
            user,
            token: generateToken({ id: user.id }) 
        });
    }
}