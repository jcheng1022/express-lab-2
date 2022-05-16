const express = require('express');
const res = require('express/lib/response');
const app = express();

// GREETINGS
app.get('/', (req,res) => {
    res.send('This is the root page');
})
app.get('/greeting/:name', (req,res) => {
    res.send("What's up " + req.params.name);
})


app.listen(3000, () => {
    console.log('I am listening');
})

// TIP CALCULATOR

app.get('/tip/:total/:tipPercentage', (req,res) => {
    res.send(` ${req.params.total * (req.params.tipPercentage / 100)}`);
})