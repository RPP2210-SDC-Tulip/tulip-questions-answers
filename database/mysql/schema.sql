USE questionanswers;

/*create table for question*/
CREATE TABLE questions (
  /* Describe your table here.*/
  question_id INTEGER PRIMARY KEY,
  product_id INTEGER NOT NULL,
  question_body TEXT NOT NULL,
  question_date VARCHAR(55) NOT NULL,
  asker_name VARCHAR(255) NOT NULL,
  asker_email VARCHAR(255) NOT NULL,
  question_reported BOOLEAN NOT NULL,
  question_helpfulness INTEGER NOT NULL
);

/*create table for answer*/
CREATE TABLE answers (
  /* Describe your table here.*/
  answer_id INTEGER PRIMARY KEY,
  question_id_fk INTEGER NOT NULL,
  answer_body TEXT NOT NULL,
  answer_date VARCHAR(55) NOT NULL,
  answerer_name VARCHAR(255) NOT NULL,
  answerer_email VARCHAR(255) NOT NULL,
  answer_reported BOOLEAN NOT NULL,
  answer_helpfulness INTEGER NOT NULL,
  FOREIGN KEY (question_id_fk) REFERENCES questions(question_id)
);

/*create table for photo*/
CREATE TABLE photos (
  /* Describe your table here.*/
  photo_id INTEGER PRIMARY KEY,
  answer_id_fk INTEGER NOT NULL,
  photo_url TEXT NOT NULL,
  FOREIGN KEY (answer_id_fk) REFERENCES answers(answer_id)
);