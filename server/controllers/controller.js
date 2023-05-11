//where callbacks with req,res will be written. Import model methods
const QAModel = require('../../database/mysql/models.js');

var getQuestions = (req, res) => {
  console.log('controller level req.params: ', req.params);
  console.log('controller level req.query: ', req.query);
  QAModel.getQuestions(req, res);
};

var postQuestion = (req, res) => {
  console.log('controller level req.query: ', req.query);
  QAModel.postQuestion(req, res);
}

var markQuestionHelpful = (req, res) => {
  console.log('controller level req.params: ', req.params);
  QAModel.markQuestionHelpful(req, res);
}

var reportQuestion = (req, res) => {
  console.log('controller level req.params: ', req.params);
  QAModel.reportQuestion(req, res);

};

var getAnswers = (req, res) => {
  //console.log('controller level req.params: ', req.params);
  QAModel.getAnswers(req, res);
};

var postAnswer = (req, res) => {

  QAModel.postAnswer(req, res);
};

exports.getQuestions = getQuestions;
exports.postQuestion = postQuestion;
exports.markQuestionHelpful = markQuestionHelpful;
exports.reportQuestion = reportQuestion;
exports.getAnswers = getAnswers;
exports.postAnswer = postAnswer;