const db = require('./db.js');
//where the methods containing sql queries will be written

//get a question/questions
var getQuestions = (req, res) => {
  //console.log('model level req.params: ', req.params.product_id);
  console.log('model level req.query: ', req.query.product_id);
  var query;
  if (req.query.product_id === undefined) {
    query = 'SELECT * FROM answers, questions WHERE answers.question_id_fk = questions.question_id AND questions.product_id = 1';
    // console.log('no product id given');
  } else {
    //query = `SELECT * FROM questions WHERE product_id = ${req.query.product_id} LIMIT 5`;
    query = `SELECT * FROM answers, questions WHERE answers.question_id_fk = questions.question_id AND questions.product_id = ${req.query.product_id}`;
    // console.log('product id given');
  }
  db.query(query, function (err, result) {
    if (err) throw err;
    console.log('RESULT: ', result);
    var obj = {};
    if (result.length !== 0) {

      obj.product_id = result[0].product_id.toString(); //add product id field

      var answers = {};
      var questions = {};
      for (var i = 0; i < result.length; i++) {
        var answer_id = result[i].answer_id;
        var question_id = result[i].question_id;
        //console.log(question.answer_id);
        //separate individual answers from questions, edit to fit expected shape
        answers[answer_id] = {};
        answers[answer_id].id = answer_id;
        answers[answer_id].body = result[i].answer_body;
        answers[answer_id].date = new Date(parseInt(result[i].answer_date));
        answers[answer_id].answerer_name = result[i].answerer_name;
        answers[answer_id].helpfulness = result[i].answer_helpfulness;
        answers[answer_id].photos = [];
        answers[answer_id].question_id = result[i].question_id;

        //separate individual questions, skipping repeated questions, edit to fit expected shape
        if (questions[question_id] === undefined) {
          questions[question_id] = {};
          questions[question_id].question_id = question_id;
          questions[question_id].question_body = result[i].question_body;
          questions[question_id].question_date = new Date(parseInt(result[i].question_date));
          questions[question_id].asker_name = result[i].asker_name;
          questions[question_id].question_helpfulness = result[i].question_helpfulness;
          if (result[i].question_reported === 0) {
            questions[question_id].question_reported = false;
          } else {
            questions[question_id].question_reported = true;
          }
          questions[question_id].answers = {}; //create empty field where answers object will go
        }
      }

      // insert answer objects back into questions object
      for (key in answers) {
        var question_id = answers[key].question_id;
        questions[answers[key].question_id].answers[key] = answers[key];
        delete answers[key].question_id; //edit to fit expected shape
        //console.log('HERE: ', questions[question_id].answers);
      }

      var results = [];
      //put questions in arr to fit expected shape
      for (key in questions) {
        results.push(questions[key]);
      }

      //console.log('result arr: ', results);
      obj.results = results;

    }

    res.send(obj).status(200);
  });


};

//post a new question
var postQuestion = (req, res) => {
  req.query.question_date = Date.now();
  req.query.question_reported = false;
  req.query.question_helpfulness = 0;
  console.log('model level req.query: ', req.query);
  var query = `INSERT INTO questions (product_id, question_body, question_date, asker_name, asker_email, question_reported, question_helpfulness) VALUES (${req.query.product_id}, \'${req.query.body}\', \'${req.query.question_date}\', \'${req.query.name}\', \'${req.query.email}\', false, 0)`;
  console.log('the query: ', query);
  db.query(query, function (err, result) {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.send(result).status(200);
  });
};

//mark a question helpful
var markQuestionHelpful = (req, res) => {
  console.log('model level req.params: ', req.params);
  var query = `UPDATE questions SET question_helpfulness = question_helpfulness + 1 WHERE question_id = ${req.params.question_id}`;
  console.log('the query: ', query);
  db.query(query, function (err, result) {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.send(result).status(204);
  });
};

//report a question
var reportQuestion = (req, res) => {
  console.log('model level req.params: ', req.params);
  var query = `UPDATE questions SET question_reported = true WHERE question_id = ${req.params.question_id};`;
  console.log('the query: ', query);
  db.query(query, function (err, result) {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.send(result).status(204);
  });
};


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
};

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
};

//mark answer helpful
var markAnswerHelpful = (req, res) => {
  console.log('model level req.params: ', req.params);
  var query = 'construct update query here';
  res.send('put req for marking answer as helpful made').status(204);
};

//report an answer
var reportAnswer = (req, res) => {
  console.log('model level req.params: ', req.params);
  var query = 'construct update query here';
  res.send('put req for reporting an answer made').status(204);
};

exports.getQuestions = getQuestions;
exports.postQuestion = postQuestion;
exports.markQuestionHelpful = markQuestionHelpful;
exports.reportQuestion = reportQuestion;

exports.getAnswers = getAnswers;
exports.postAnswer = postAnswer;
exports.markAnswerHelpful = markAnswerHelpful;
exports.reportAnswer = reportAnswer;