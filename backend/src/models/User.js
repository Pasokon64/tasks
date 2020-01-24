const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,   // não permite repetição no email
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false   // não retorna o password no select
    }
});

UserSchema.pre('save', async function (next) {
    const hash = bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = mongoose.model('User', UserSchema);