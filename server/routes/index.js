const router = require('express').Router();
const { signUpHandle, signInHandle, auth, errorNotFound , serverError, errorIssue} = require('../controllers/index');

router.post('/sign-up', signUpHandle);
router.post('/sign-in', signInHandle);
router.get('/auth', auth);
router.use(errorNotFound);
router.use(serverError);
router.use(errorIssue);
module.exports = router;
