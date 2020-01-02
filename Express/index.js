const express = require('express');
const app = express();


app.get('/',(req, res) => {
    res.send("AssalamOAlikum")
});

app.get('/api/salam',(req, res) => {
    res.send([1, 2, 3,4,]);
});

app.get('/api/salam/:id/:name', (req, res) => {
    // res.send(req.params);
    res.send(`Hello ${req.params.name} query by ${req.query.sortBy}`);

    // res.send(""+req.params+ ""+req.query);

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));