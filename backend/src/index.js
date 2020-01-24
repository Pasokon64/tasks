const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://admin:1234@cluster0-mlicn.mongodb.net/tasks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(routes);

app.listen(3000);