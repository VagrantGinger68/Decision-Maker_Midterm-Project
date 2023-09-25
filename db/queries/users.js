const db = require('../connection');

const createUser = (email) => {
  return db
  .query(`
  INSERT INTO users (email) 
  VALUES ($1)
  RETURNING *;`,[email])
  .then(data => {
    return data.rows[0];
  });
};

const getUserEmailByPollId = (pollId) => {
  return db
  .query(`
  SELECT email FROM users
  JOIN polls ON users.id = user_id
  WHERE polls.id = $1;`, [pollId])
  .then(data => {
    return data.rows[0].email;
  })
}

module.exports = { createUser, getUserEmailByPollId };
