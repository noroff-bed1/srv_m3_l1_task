const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 

app.get('/message', (req, res) => {
    res.json({ message: 'Welcome to my API deployed on render.com!' });
});

app.get('/about', (req, res) => {
    res.json({
        name: 'JP Taylor',
        project: 'This task is to show off my mad skills to deploy an API to the cloud!'
    });
});

app.get('/random-number', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    res.json({ randomNumber });
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
