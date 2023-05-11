const express = require('express');
const questionsRouter = express.Router();
const questionsControllers = require('./controllers/questions.js');

questionsRouter.get('/questions', questionsControllers.getQuestions);
questionsRouter.get('/:product_id', questionsControllers.getQuestions);
questionsRouter.post('/questions', questionsControllers.postQuestion);
questionsRouter.put('/questions/:question_id/helpful', questionsControllers.markQuestionHelpful);
questionsRouter.put('/questions/:question_id/report', questionsControllers.reportQuestion);

//handle routes, import controller methods

module.exports = questionsRouter;