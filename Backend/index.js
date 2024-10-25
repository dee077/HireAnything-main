const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const Partner = require('./models/Partner');
const authRoutes = require('./routes/authRoutes');
const contactRoutes =require('./routes/contactRoutes');
const patnerRoutes = require('./routes/patnerRoutes');



require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// MongoDB connection
const port = process.env.PORT || 5001;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hireanything.z89ehki.mongodb.net/hireanything?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

  app.use('/api/auth', authRoutes);

  
   app.use('/api/contact', contactRoutes);

   app.use('/api', patnerRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
