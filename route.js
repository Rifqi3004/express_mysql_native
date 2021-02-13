const express = require('express');

// disini nanti untuk import controller
const getMovies = require('./controllers/movies/getMovies');

const getUsers = require('./controllers/users/getUsers');
const addUsers = require('./controllers/users/addUsers');
const updateUsers = require('./controllers/users/updateUsers');
const deleteUsers = require('./controllers/users/deleteUser');
const getOneUsers = require('./controllers/users/getOneUsers');

// initial route
const route = express.Router();

// disini code method method
route.get('/movies', getMovies);

route.get('/users', getUsers);
route.get('/users/:id', getOneUsers);
route.post('/users', addUsers);
route.put('/users/:id', updateUsers);
route.delete('/users/:id', deleteUsers);


module.exports = route;