const express = require('express');
const answersRouter = express.Router();
const answersControllers = require('./controllers/answers.js');

answersRouter.get('/', answersControllers.getAnswers);
answersRouter.get('/:question_id/answers', answersControllers.getAnswers);

module.exports = answersRouter;