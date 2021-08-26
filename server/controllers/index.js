const signUpHandle = require('./sign-up');
const signInHandle = require('./sign-in');
const signOutHandle = require('./sign-out');
const auth = require('./utils/authHandle');
const errorNotFound = require('./errorNotFound');
const serverError = require('./serverError');
const successDonate = require('./successDonate');

module.exports = {
  signUpHandle, signInHandle, auth, errorNotFound, errorIssue, serverError, signOutHandle,
};
