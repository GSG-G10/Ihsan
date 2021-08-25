const { join } = require('path');
const router = require('express').Router();
const {
  signUpHandle, signInHandle, auth, errorNotFound, serverError, successDonate
} = require('../controllers/index');

router.get('/sign-up', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'sign-up.html'));
});
router.get('/sign-in', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'sign-in.html'));
});

router.get('/donate', auth, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'donate-form.html'));
});
router.get('/success-donate', successDonate);

router.post('/sign-up', signUpHandle);
router.post('/sign-in', signInHandle);

router.use(errorNotFound);
router.use(serverError);

module.exports = router;
