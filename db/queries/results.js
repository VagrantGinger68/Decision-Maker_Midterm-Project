const db = require("../connection");

const getResultsById = (pollId) => {
  return db
    .query(
      `SELECT points
    FROM submissions
    WHERE poll_id = $1;`,
      [pollId]
    )
    .then((data) => {
      return data.rows.map((row) => {
        return row.points;
      });
    })
    .catch((error) => console.log(error));
};

module.exports = { getResultsById };
