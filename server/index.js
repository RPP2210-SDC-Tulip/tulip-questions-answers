const express = require('express');
const app = express();
const QARouter = require('./qa-router.js');
const controller = require('./controllers/controller.js');
const auth = require('../config.js');

const PORT = 3000;

app.use(`/${auth.LOADERIO}`, controller.loaderioVerification);
app.use('/qa', QARouter);

app.listen(PORT, () => {

  console.log(`Server is listening on ${PORT}`);

});
