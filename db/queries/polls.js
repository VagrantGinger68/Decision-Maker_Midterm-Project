const db = require('../connection');

const getPollById = (id) => {
  return db
  .query(
    `SELECT *
    FROM polls
    WHERE id = $1;`, [id])
  .then(data => {
    return data.rows[0];
  });
};

const getChoicesByPoll = (pollId) => {
  return db
  .query(
    `SELECT title, description
    FROM choices
    WHERE poll_id = $1;`, [pollId]
  )
  .then(data => {
    const choices = data.rows;
    return choices;
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

module.exports = {getPollById, insertPoll, insertChoices, getChoicesByPoll};