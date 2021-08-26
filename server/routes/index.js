const { join } = require('path');
const cookieParser = require('cookie-parser');
const router = require('express').Router();
const {
  signUpHandle, signInHandle, auth, errorNotFound, serverError, errorIssue, signOutHandle,
} = require('../controllers/index');

router.get('/check-user', auth, (req, res) => {
  const cookies = req.cookies.access_token;
  const base64Decode = (str) => Buffer.from(str, 'base64').toString();
  const decodeCookies = base64Decode(cookies);
  res.json(decodeCookies);
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
