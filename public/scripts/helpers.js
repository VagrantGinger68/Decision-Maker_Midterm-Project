const pollQueries = require("../../db/queries/polls");

//Generate a random 6 digit string
const generateRandomString = function () {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};

const getChoices = function (body) {
  const choices = [];

  for (let key in body) {
    if (key.startsWith("option")) {
      choices.push(body[key]);
    }
  }

  return choices;
};

const insertAllChoices = function (choices, pollId) {
  for (let choice of choices) {
    pollQueries.insertChoices([choice, pollId]);
  }
};

// takes in a nested array of arrays and sum all the points for all the choices into a single array
const generateResults = function (results) {
  const totalPoints = results[0];
  for (let i = 1; i < results.length; i++) {
    for (let j = 0; j < results[i].length; j++) {
      totalPoints[j] += results[i][j];
    }
  }
  return totalPoints;
};

// rank choices by the points for each of the choices
const rankChoices = function(choices, results) {
  const indices = [];
  for (const ind of results.keys()) {
    indices.push(ind);
  }

  // Sort the indices based on the corresponding results values
  indices.sort((a, b) => results[b] - results[a]);

  // Create the rankedChoices array based on the sorted indices
  const rankedChoices = [];
  for (let i = 0; i < indices.length; i++) {
    rankedChoices.push(choices[indices[i]]);
  }
  return rankedChoices;
};

module.exports = {
  generateRandomString,
  getChoices,
  insertAllChoices,
  generateResults,
  rankChoices,
};
