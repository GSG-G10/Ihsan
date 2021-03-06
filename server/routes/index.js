const { join } = require('path');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const {
  signUpHandle, signInHandle, auth, errorNotFound, serverError, successDonate, signOutHandle,
} = require('../controllers/index');

router.get('/check-user', auth, (req, res) => {
  const cookies = req.cookies.access_token;
  const decoded = jwt.decode(cookies);
  res.json(decoded.name);
});

router.get('/sign-up', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'sign-up.html'));
});

router.get('/sign-in', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'sign-in.html'));
});

router.get('/donate', auth, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'donate-form.html'));
});
router.get('/sign-out', signOutHandle);

router.get('/success-donate', successDonate);

router.post('/sign-up', signUpHandle);
router.post('/sign-in', signInHandle);

router.use(errorNotFound);
router.use(serverError);

module.exports = router;
