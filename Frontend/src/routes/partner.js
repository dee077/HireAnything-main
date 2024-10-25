import nodemailer from 'nodemailer';










// Create a transporter object using Hostinger SMTP settings from environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true', // true for SSL, false for TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false // Consider removing this in production
  }
});

// Setup email data


// Partner Sign-Up Route
app.post('/partner-signup', async (req, res) => {
  try {
      alert('savw');
    const partnerData = new Partner(req.body);
    await partnerData.save();

    const mailOptions = {
  from: process.env.SMTP_USER,
      to: req.body.email, // Partner's email from the form
      subject: 'Partner Sign-Up Successful',
      text: `Hi ${req.body.firstName},\n\nYour partner sign-up on HireAnything has been successfully completed.\n\nThank you for joining us!`,
    };
console.log('Mail Options:', mailOptions);

    // Wrap sendMail in a promise for async/await compatibility
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending confirmation email:', error);
          return reject(error); // Reject the promise on error
        }
        console.log('Confirmation email sent:', info.response);
        resolve(info); // Resolve the promise on success
      });
    });

    res.status(201).json({ message: 'Partner signed up successfully!' });
  } catch (error) {
    console.error('Error signing up partner:', error);
    res.status(500).json({ message: 'Error signing up partner', error: error.message });
  }
});

// Start the serve