const express = require('express');
const app = express();
const QARouter = require('./qa-router.js');

const PORT = 3000;

app.use('/qa', QARouter);

app.listen(PORT, () => {

  console.log(`Server is listening on ${PORT}`);

});
