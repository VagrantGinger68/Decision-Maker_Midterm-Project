const db = require('../connection');

const createSubmission = (data) => {
  return db
  .query(`
  INSERT INTO submissions (poll_id, time_submitted, points) 
  VALUES ($1, $2, $3)
  RETURNING *;`,[data])
  .then(data => {
    return data.rows[0];
  });
};

module.exports = { createSubmission };