const { join } = require('path');
const { signUpQueries } = require('../database/queries');
const { hashPassword, signUpValiadtion } = require('../utils');

const signUpHandle = (req, res, next) => {
  const { name, password, email } = req.body;
  const { error, value } = signUpValiadtion.validate({ name, password, email });
  if (error) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'html', '400.html'));
  } else {
    hashPassword(password, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        signUpQueries(name, hashedPassword, email)
          .then(() => res.redirect('/sign-in'))
          .catch(() => {
            res.cookie('error', 'This email already used');
            res.redirect('/sign-up');
          });
      }
    });
  }
};
module.exports = signUpHandle;
