const express = require('express');
const Joi = require('joi');
const courses = require('./routes/courses');
const home = require('./routes/home');
// const home = require('./routes/home');
const log = require('./middleware/logger');


const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); 

app.use(express.json());
app.use('/',home);
app.use('/api/courses',courses);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));