const { signUpQueries } = require('../database/queries');
const { hashPassword, signUpValiadtion } = require('../utils');

const signUpHandle = (req, res) => {
  const { name, password, email } = req.body;
  const { error, value } = signUpValiadtion.validate({ name, password, email });
  if (error) {
    res.status(400).json({ msg: error.message });
  } else {
    hashPassword(password, (err, hashedPassword) => {
      if (err) {
        res.status(400).send();
      } else {
        signUpQueries(name, hashedPassword, email);
        res.redirect('/sign-in');
      }
    });
  }
};
module.exports = signUpHandle;
