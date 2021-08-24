const router = require('express').Router();
const { signUpHandle } = require('../controllers/index');

router.post('/sign-up', signUpHandle);

module.exports = router;
