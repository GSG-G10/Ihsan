const router = require('express').Router();
const { signUpHandle, signInHandle, auth } = require('../controllers/index');

router.post('/sign-up', signUpHandle);
router.post('/sign-in', signInHandle);
router.get('/auth', auth);
module.exports = router;
