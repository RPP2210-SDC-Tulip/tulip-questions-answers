const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller.js');

//handle routes, import controller methods

//question
router.get('/questions', controller.getQuestions); //gets a list of questions based on query params
//router.get('/:product_id', controller.getQuestions);
router.post('/questions', controller.postQuestion); // posts a new question based on query params(body)
router.put('/questions/:question_id/helpful', controller.markQuestionHelpful); //updates a field in question based on param(incr helpful field)
router.put('/questions/:question_id/report', controller.reportQuestion); //updates a field in question based on param(update reported field to true)
//answer
router.get('/questions/:question_id/answers', controller.getAnswers); //gets a list of answers based on reg param(q_id) and query params(count, page)
router.post('/questions/:question_id/answers', controller.postAnswer); // posts a new answer based on query params(body)
router.put('/answers/:answer_id/helpful', controller.markAnswerHelpful); ////updates a field in answer based on param(incr helpful field)
router.put('/answers/:answer_id/report', controller.reportAnswer); //updates a field in answer based on param(update reported field to true)


module.exports = router;