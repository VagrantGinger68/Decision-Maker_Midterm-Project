const db = require('../connection');

const createSubmission = (poll_id, points) => {
  console.log(points);
  return db
  .query(`
  INSERT INTO submissions (poll_id, time_submitted, points) 
  VALUES ($1, current_timestamp, $2)
  RETURNING *;`,[poll_id, points])
  .then(data => {
    return data.rows[0];
  });
};

module.exports = { createSubmission };