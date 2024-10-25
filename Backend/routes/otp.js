// const express = require('express');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// // Nodemailer configuration (use your SMTP credentials or Gmail)
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // or any other email service
//   auth: {
//     user: process.env.EMAIL_USER, // Your email
//     pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//   },
// });

// // Route to send OTP email
// router.post('/send-otp', async (req, res) => {
//   const { email, otp } = req.body;
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: email,
//     subject: 'Your OTP Code',
//     text: `Your OTP code is: ${otp}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'OTP sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending OTP' });
//   }
// });

// module.exports = router;
