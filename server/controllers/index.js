const signUpHandle = require('./sign-up');
const signInHandle = require('./sign-in');
const auth = require('./utils/authHandle');
const errorNotFound = require('./errorNotFound');
const serverError = require('./serverError');
const successDonate = require('./successDonate');

module.exports = {
  signUpHandle, signInHandle, auth, errorNotFound, serverError, successDonate
};
