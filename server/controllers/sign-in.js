const {
  sign,
} = require('jsonwebtoken');
const {
  getUserData,
} = require('../database/queries');
const {
  comparePassword,
  hashPassword,
  signinValiadtion,
} = require('../utils');

module.exports = (req, res) => {
  const {
    email,
    password,
  } = req.body;

  getUserData(email).then(({
    rows,
  }) => {
    if (!rows.length) {
      res.status(302).json({
        message: " your haven't any email",
      });
    } else {
      const {
        name,
        password: hashPass,
      } = rows[0];
      comparePassword(password, hashPass, (err, isMatchPass) => {
        if (isMatchPass) {
          sign({
            name,
            email,
          }, process.env.secretKey, (err, token) => {
            res.cookie('access_token', token, {
              httpOnly: true,
            }).status(200).redirect('/');
          });
        } else {
          res.status(302).json({
            message: "You're Password Is wrong",
          });
        }
      });
    }
  });
};
