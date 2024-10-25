const Partner = require('../models/Partner')
;const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

const nodemailer = require('nodemailer');

require('dotenv').config();


// Nodemailer configuration for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port : 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use an app-specific password
  }
});

const sendEmail = (formData) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Form Submission Successful',
      text: `Hello,\n\nThank you for your submission. We have received the following input:\n\n${formData.input}\n\nBest regards,\nYour Team`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  };

exports.PatnerSignup = async(req ,res) =>{
    try {
        const partnerData = new Partner(req.body);
        await partnerData.save();
    
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: req.body.email,
          subject: 'Partner Sign-Up Successful',
          text: `Hi ${req.body.firstName},\n\nYour partner sign-up on HireAnything has been successfully completed.\n\nThank you for joining us!`,
        };
    
        await new Promise((resolve, reject) => {
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error sending confirmation email:', error);
              return reject(error);
            }
            console.log('Confirmation email sent:', info.response);
            resolve(info);
          });
        });
    
        res.status(201).json({ message: 'Partner signed up successfully!' });
      } catch (error) {
        console.error('Error signing up partner:', error);
        res.status(500).json({ message: 'Error signing up partner', error: error.message });
      }
};

// exports.PartnerSignup = async (req, res) => {
//   try {
//     const partnerData = new Partner(req.body);
//     await partnerData.save();

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: req.body.email,
//       subject: 'Partner Sign-Up Successful',
//       text: `Hi ${req.body.firstName},\n\nYour partner sign-up on HireAnything has been successfully completed.\n\nThank you for joining us!`,
//     };

//     await sendEmail(req.body.email, mailOptions.subject, mailOptions.text);

//     res.status(201).json({ message: 'Partner signed up successfully!' });
//   } catch (error) {
//     console.error('Error signing up partner:', error);
//     res.status(500).json({ message: 'Error signing up partner', error: error.message });
//   }
// };


const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  };
  const otpStore = {};
  var otpExpiry = {};

exports.sendOtp = async (req, res) => {
    const { email } = req.body;
  
    try {
      const otp = generateOTP();
      otpExpiry = Date.now() + 10 * 60 * 1000;
  
      otpStore[email] = { otp, otpExpiry };
  
      // Save OTP and expiry to partner's document
      
  
      // Send OTP email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json({ message: 'Error sending OTP', error: error.message });
    }
  };

exports.verifyOtp =   async (req, res) => {
    const { email, otp } = req.body;
  
    try {
      // Check if an OTP exists for the email
      console.log (otpStore[email]);
      console.log (otpStore);
      console.log (otp);
      if (!otpStore[email]) {
        return res.status(404).json({ message: 'No OTP found for this email' });
      }
  
      const { otp: storedOtp, otpExpiry } = otpStore[email];
  
      // Check if OTP matches and is not expired
      if (storedOtp !== otp) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
      if (Date.now() > otpExpiry) {
        return res.status(400).json({ message: 'OTP has expired' });
      }
  
      // OTP is valid, clear OTP fields for this email
      // delete otpStore[email];
      
      res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).json({ message: 'Error verifying OTP', error: error.message });
    }
  };



  exports.conformaionEmail = async (req, res) => {
    try {
      const { input, email } = req.body;
      const formData = new FormModel({ input });
      await formData.save();
      
      // Send confirmation email
      sendEmail({ input, email });
  
      res.status(201).send('Form submission successful');
    } catch (error) {
      console.error('Error processing form:', error);
      res.status(500).send('Error processing form');
    }
  };

  exports.allvendor = async (req, res) => {
    try {
      const { input, email } = req.body;
      const formData = new FormModel({ input });
      await formData.save();
      
      // Send confirmation email
      sendEmail({ input, email });
  
      res.status(201).send('Form submission successful');
    } catch (error) {
      console.error('Error processing form:', error);
      res.status(500).send('Error processing form');
    }
  };
  

