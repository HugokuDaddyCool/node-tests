const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res
        .status(404)
        .send({
            error: 'Page not found',
            name: 'Todo App v1.0'
        });
});

// GET /users
// Give users a name prop and age prop
var users = [
    {name: 'Victor', age: 45},
    {name: 'Oscar', age: 14},
    {name: 'Karla', age: 13},
    {name: 'Vicky', age: 21},
    {name: 'Isabel', age: 46}
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(3000);

module.exports = {
    app
}