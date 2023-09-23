const db = require('../connection');

const getPollById = (id) => {
  return db.query('SELECT * FROM polls WHERE id = $1;', [id])
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

module.exports = {getPollById, insertPoll};