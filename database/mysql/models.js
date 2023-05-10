const db = require('./db.js');
//where the methods containing sql queries will be written

//get a question/questions
var getQuestions = (req, res) => {
  //console.log('model level req.params: ', req.params.product_id);
  console.log('model level req.query: ', req.query.product_id);
  var query;
  if (req.query.product_id === undefined) {
    query = 'SELECT * FROM questions LIMIT 5';
    // console.log('no product id given');
  } else {
    query = `SELECT * FROM questions WHERE product_id = ${req.query.product_id} LIMIT 5`;
    // console.log('product id given');
  }
  db.query(query, function (err, result) {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.send(result).status(200);
  });
}

//post a new question
var postQuestion = (req, res) => {
  var created_at = Date.now();
  req.query.question_date = created_at;
  req.query.question_reported = false;
  req.query.question_helpfulness = 0;
  req.query.question_id = 0;
  console.log('model level req.query: ', req.query);
  var query = 'construct insert query here';
  res.send('post req for new question made')
}

//mark a question helpful

//report a question

//get an answer/answers
var getAnswers = (req, res) => {
  console.log('model level req.params: ', req.params);
  console.log('model level req.query: ', req.query);
  var query;
  if (req.params.question_id === undefined) {
    query = 'SELECT * FROM answers LIMIT 5';
    // console.log('no question id given');
  } else {
    query = `SELECT * FROM answers WHERE question_id_fk = ${req.params.question_id} LIMIT 5`;
    // console.log('question id given');
  }
  db.query(query, function (err, result) {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.send(result).status(200);
  });
}

//post new answer
var postAnswer = (req, res) => {
  var created_at = Date.now();
  req.query.answer_date = created_at;
  req.query.answer_reported = false;
  req.query.answer_helpfulness = 0;
  req.query.answer_id = 0;
  console.log('model level req.query: ', req.query);
  var query = 'construct insert query here';
  res.send('post req for new answer made')
}

//mark answer helpful

//report an answer

exports.getQuestions = getQuestions;
exports.getAnswers = getAnswers;
exports.postQuestion = postQuestion;