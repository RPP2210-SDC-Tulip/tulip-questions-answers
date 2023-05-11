//where callbacks with req,res will be written. Import model methods
const Answers = require('../../database/mysql/models.js');

var getAnswers = (req, res) => {
  //console.log('controller level req.params: ', req.params);
  Answers.getAnswers(req, res);
};

exports.getAnswers = getAnswers;