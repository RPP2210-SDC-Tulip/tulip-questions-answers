//create a database to use: questionsanswers
//import statement
const Sequelize = require('sequelize');
//create a db instance
const db = new Sequelize('questionanswers', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

//create table schemas
const Question = db.define('question', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  question_body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  question_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  asker_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  question_helpfulness: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  question_reported: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

const Answer = db.define('answer', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  answer_body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  answer_date: {

  },
  answerer_name: {
  },
  answer_helpfulness: {
    
  }
});

const Photo = db.define('photo', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Question.hasMany(Answer);
Answer.hasMany(Photo);

//test our connection
db.sync({ force: true }).then((result) => {
  console.log('db initialized: ', result.config);
  console.log('models: ', result.models);
}).catch((err) => {
  console.log(err);
});
