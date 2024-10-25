const express = require("express");
const { verifyOtp, PatnerSignup, conformaionEmail, sendOtp, allvendor } = require("../controllers/patnerControllers");
const router = express.Router(); 

const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/send-otp' , sendOtp);
router.post('/verify-otp'  , verifyOtp);
router.post ('/partnersignup' ,  upload.array('photos'), PatnerSignup);
router.post('/sendEmail' , conformaionEmail);

router.get('/allvendor' , allvendor);

module.exports = router;