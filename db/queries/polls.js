const db = require('../connection');

const getPollById = (id) => {
  return db
  .query(
    `SELECT polls.id AS poll_id, polls.title AS poll_title, polls.question AS poll_question, choices.id AS choice_id, choices.title AS choice_title, choices.description AS choice_description
    FROM polls
    JOIN choices ON polls.id = choices.poll_id
    WHERE polls.id = $1;`, [id])
  .then(data => {
    return data.rows[0];
  });
};

const insertPoll = (data) => {
  return db
  .query(
    `INSERT INTO polls (id, title, question, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;`, data)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.error(err.message);
    });
};

const insertChoices = (data) => {
  return db
  .query(
    `INSERT INTO choices (title, poll_id)
    VALUES ($1, $2)
    RETURNING *;`, data)
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.error(err.message);
    });
};

module.exports = {getPollById, insertPoll, insertChoices};