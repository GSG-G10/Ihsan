const { join } = require('path');
const router = require('express').Router();
const {
  signUpHandle, signInHandle, auth, errorNotFound, serverError, errorIssue,
} = require('../controllers/index');

router.post('/sign-up', signUpHandle);
router.post('/sign-in', signInHandle);
router.get('/sign-up', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'sign-up.html'));
});
router.get('/sign-in', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'sign-in.html'));
});
router.get('/donate', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'donate-form.html'));
});

router.get('/auth', auth);
router.use(errorNotFound);
router.use(serverError);
router.use(errorIssue);
module.exports = router;
