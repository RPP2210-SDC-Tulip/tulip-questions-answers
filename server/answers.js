const express = require('express');

const answersRouter = express.Router();

answersRouter.get('/', (req, res) => {
  res.send('GET request to /answers made!');
})


module.exports = answersRouter;