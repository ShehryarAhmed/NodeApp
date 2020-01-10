const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

var courses = [
    {id:1,name:'Quran'},
    {id:2,name:'Islam'},
    {id:3,name:'Math'}
]

app.get('/',(req, res) => {
    res.send("AssalamOAlikum")
});

app.get('/api/salam',(req, res) => {
    // res.send([1, 2, 3,4,]); 
    res.send(courses);

});

app.get('/api/salam/:id', (req, res) => {
    // res.send(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given ID was not found')
    // res.send(`Hello ${req.params.name} query by ${req.query.sortBy}`);
    // res.send(""+req.params+ ""+req.query);
    res.send(course)
});

app.post('/api/courses', (req, res) => {
    
    const schema = {
        id: Joi.number().min(3).required(),
        name : Joi.string().min(3).required() 
    };

const result = Joi.validate(req.body,schema);
// console.log(result); 
    
if(result.error){
res.status(400).send(result.error.details );
}else{
    const course = {
        id: req.body.id,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
}
    
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));