const router = require('express').Router();
const { signUpHandle, signInHandle } = require('../controllers/index');

router.post('/sign-up', signUpHandle);
router.post('/sign-in', signInHandle);

module.exports = router;
