// Initializing the required files (basic setup)
const express = require('express');
const app = express();
const port = 8000;

// Currently we are working on this array as our model
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

// These are routes
app.get('/', (req, res) => {
    res.send("Hey!");
});


app.get("/users", (req, res) => {
    return res.json(arr);
})

// This is the server being setup
app.listen(port, () => {
    console.log('server running on port: ', port);
});














/*
    CODE EXPLANATION

    We are using express here and on the top part initialization we are importing express which is presen in the node_modules folder to our working file by require command. 
    As express file that we recieve is a function so to use it we have to invoke it so we do it by initializing it to a const app. 

    Inside the express function there are more functions defined so we invoke them like the  example shown below: 
    app.get((route), (req, res) => {
        //statements....
    });

    As said controllers handels the reques and gives appropriate response hence the two arguments are present req, res. 

    They are defualt by express. These two areguments are actually objects which includes a lot of features or functionalities in key value pair. Using which we are operating for now. 

*/