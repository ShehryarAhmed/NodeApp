const express = require('express');
const router = express.Router();

var courses = [
    {id:1,name:'Quran'},
    {id:2,name:'Islam'},
    {id:3,name:'Math'}
]

router.get('/',(req, res) => {
    // res.send([1, 2, 3,4,]); 
    res.send(courses);

});

router.get('/:id', (req, res) => {
    // res.send(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given ID was not found')
    // res.send(`Hello ${req.params.name} query by ${req.query.sortBy}`);
    // res.send(""+req.params+ ""+req.query);
    res.send(course)
});

router.post('/', (req, res) => {
    const {error} = validateCourse(req.body); 
if(error){
res.status(400).send(error );
}else{
    const course = {
        id: req.body.id,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
}
    
})
//put request
router.put('/:id',(req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    console.log(course)
    if(!course) res.status(404).send('The course with given ID was not found')

    const { error } = validateCourse(course)
if(error){
res.status(400).send(error );
}else{
    course.name = req.body.name
    res.send(course);
}
});

function validateCourse(course){
    const schema = {
        id: Joi.number().min(1).required(),
        name : Joi.string().min(3).required() 
    };

return Joi.validate(course,schema);
}


router.delete('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with given ID was not found')

    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course)

});

module.exports = router;