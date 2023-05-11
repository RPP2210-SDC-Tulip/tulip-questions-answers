const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qa');

let QuestionSchema = mongoose.Schema({
  product_id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answers: [AnswerSchema]
});

let AnswerSchema = mongoose.Schema({
  question_id: Number,
  body: String,
  date: Date,
  answerer_name: String,
  helpfulness: Number,
  photos: [PhotoSchema]

});

let PhotoSchema = mongoose.Schema({
  answer_id: Number,
  url: String
});

module.exports.Question = mongoose.model('Question', QuestionSchema);
module.exports.Answer = mongoose.model('Answer', AnswerSchema);
module.exports.Photo = mongoose.model('Photo', PhotoSchema);
