const express = require('express');
const { register, login, allUser,} = require('../controllers/authControllers');
const router = express.Router();

router.get('/allUser' , allUser)
router.post('/register', register);
router.post('/login', login);
// router.get('/google', googleLogin);

module.exports = router;