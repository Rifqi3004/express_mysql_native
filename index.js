// import module express js
const express = require('express');

// import route
const route = require('./route');

// initial aplikasi express
const app = express();
// inital port
const port = 5000;

// setup middleware & parser

// setup untuk express bisa menerima data json
app.use(express.json());

// routing
app.use(route);

const getUser = (request, response) => {
    // untuk response lagsung text atau kosong
    // return response.end('Ini user');
    // untuk response data json
    const { query, params } = request;
    // logic get dari db

    const data = [
        { name: "Jon", address: "Warungasem" },
        { name: "Jin", address: "Batang" }
    ];
    const respondData = {
        query,
        params,
        data,
    }
    return response.status(200).json(respondData).end();
};

// method get
app.get('/user', getUser);

// method get dengan params

app.get('/user/:id', getUser);

// method post
app.post('/user', (request, response) => {
    const { body } = request;
    // logic save ke db

    const respondData = {
        data : body,
    }
    return response.status(201).json(respondData).end();
});


// app.delete()
// app.put()


//universal method
app.use('*', (request, response) => {
    return response.end("Welcome to api");
})

// untuk menjalankan express js (rest api)
app.listen(port, () => {
    console.log('App Running on port ' + port);
})

