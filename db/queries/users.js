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

module.exports = { createUser };
