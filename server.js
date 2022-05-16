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

//Magic 8 ball 


const responses = 
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];


app.get('/magic/:url', (req,res) => {
    res.send(`${req.params.url}  <h1> ${responses[Math.floor(Math.random() * responses.length)]}</h1>`);
})

