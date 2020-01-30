const express = require('express');
const Joi = require('joi');
const courses = require('./routes/courses');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json());
app.use('/api/courses',courses);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));