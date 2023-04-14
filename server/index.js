const express = require('express');
const app = express();
const questionsRouter = require('./questions.js');
const answersRouter = require('./answers.js');

const PORT = 3000;

app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);

app.listen(PORT, () => {

  console.log(`Server is listening on ${PORT}`);

});
