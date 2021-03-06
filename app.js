const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded());

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/home');
});
