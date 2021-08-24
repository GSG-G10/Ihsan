const jwt = require('jsonwebtoken');

const authHandle = (req, res) => {
  const token = req.cookies;

  if (token.access_token) {
    jwt.verify(token.access_token, 'YOUR_SECRET_KEY', (err, jwt) => {
      if (err) {
        res.send('/html/500.html').status(500);
      } else {
        res.json({ msg: 'suucessfuly ' });
      }
    });
  } else {
    res.redirect('/html/sign-in.html');
  }
};
module.exports = authHandle;
