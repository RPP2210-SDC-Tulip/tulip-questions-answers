//where callbacks with req,res will be written. Import model methods
const Questions = require('../../database/mysql/models.js');

var getQuestions = (req, res) => {
  console.log('controller level req.params: ', req.params);
  console.log('controller level req.query: ', req.query);
  Questions.getQuestions(req, res);
};

var postQuestion = (req, res) => {
  console.log('controller level req.query: ', req.query);
  Questions.postQuestion(req, res);
}

var markQuestionHelpful = (req, res) => {
  console.log('controller level req.params: ', req.params);
  Questions.markQuestionHelpful(req, res);
}

var reportQuestion = (req, res) => {
  console.log('controller level req.params: ', req.params);
  Questions.reportQuestion(req, res);

};

exports.getQuestions = getQuestions;
exports.postQuestion = postQuestion;
exports.markQuestionHelpful = markQuestionHelpful;
exports.reportQuestion = reportQuestion;