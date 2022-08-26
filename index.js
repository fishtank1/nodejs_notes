const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Hey!");
});

const arr = [
    {
        id: 1,
        user: "Jake"
    },
    {
        id: 2,
        user: "Jhon"
    } 
]

app.get("/users", (req, res) => {
    return res.json(arr);
})

app.listen(port, () => {
    console.log('server running on port: ', port);
});