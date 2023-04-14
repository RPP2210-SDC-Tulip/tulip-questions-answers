const express = require('express');

const questionsRouter = express.Router();

questionsRouter.get('/', (req, res) => {
  res.send('GET request to /questions made!');
});


module.exports = questionsRouter;