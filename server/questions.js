const express = require('express');
const questionsRouter = express.Router();
const questionsControllers = require('./controllers/questions.js');

questionsRouter.get('/questions', questionsControllers.getQuestions);
questionsRouter.get('/:product_id', questionsControllers.getQuestions);
questionsRouter.post('/questions', questionsControllers.postQuestion);

//handle routes, import controller methods

module.exports = questionsRouter;