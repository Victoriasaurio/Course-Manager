const express = require('express');
const controller = require('../controllers/teacher');

const api = express.Router();

api.post('/createTeacher', controller);

module.exports = api;