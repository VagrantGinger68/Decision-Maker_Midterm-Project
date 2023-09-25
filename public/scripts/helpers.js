//Generate a random 6 digit string
const generateRandomString = function() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};

const getChoices = function(body) {
  const choices = [];

  for (let key in body) {
    if (key.startsWith('option')) {
      choices.push(body[key]);
    }
  }

  return choices;
};

module.exports = { generateRandomString, getChoices };
