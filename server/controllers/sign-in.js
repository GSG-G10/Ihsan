const { sign } = require('jsonwebtoken');
const { getUserData } = require('../database/queries');
const { comparePassword, hashPassword, signinValiadtion } = require('../utils');

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  getUserData(email).then(({ rows }) => {
    if (!rows.length) {
      res.cookie('error', 'You\'ve entered an unvalid email');
      res.redirect('/sign-in');
    } else {
      const { name, password: hashPass } = rows[0];
      comparePassword(password, hashPass, (err, isMatchPass) => {
        if (isMatchPass) {
          sign(
            {
              name,
              email,
            },
            process.env.secretKey,
            (err, token) => {
              res
                .cookie('access_token', token, {
                  httpOnly: true,
                })
                .redirect('/');
            },
          );
        } else {
          res.cookie('error', 'You\'ve entered a wrong password');
          res.redirect('/sign-in');
        }
      });
    }
  });
};
