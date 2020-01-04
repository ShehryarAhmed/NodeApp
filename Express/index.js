const express = require('express');
const app = express();

var courses = [
    {id:1,name:'Quran'},
    {id:2,name:'Islam'},
    {id:3,name:'Math'}
]

app.get('/',(req, res) => {
    res.send("AssalamOAlikum")
});

app.get('/api/salam',(req, res) => {
    res.send([1, 2, 3,4,]);
});

app.get('/api/salam/:id', (req, res) => {
    // res.send(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given ID was not found')
    // res.send(`Hello ${req.params.name} query by ${req.query.sortBy}`);
    // res.send(""+req.params+ ""+req.query);
    res.send(course)
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));