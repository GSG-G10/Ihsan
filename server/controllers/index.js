const signUpHandle = require('./sign-up');
const signInHandle = require('./sign-in');
const auth = require('./authHandle');
const errorNotFound = require('./errorNotFound');
const errorIssue = require('./errorIssue');
const serverError = require('./serverError');
module.exports = { signUpHandle, signInHandle, auth, errorNotFound, errorIssue, serverError};