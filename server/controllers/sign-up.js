const { signUpQueries } = require('../database/queries');
const hashPassword = require('../utils/hash-password');

const signUpHandle = (req, res) => {
  const { name, password, email } = req.body;
  hashPassword(password, (err, hashedPassword) => {
    if (err) {
      res.status(400).send('Error happened');
    } else {
      signUpQueries(name, hashedPassword, email);
      res.redirect('/html/sign-in.html');
    }
  });
};
module.exports = signUpHandle;
