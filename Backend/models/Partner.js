const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the partner schema
const partnerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 10,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    match: [/^\d+$/, 'Contact number must be numeric'],
  },
  companyName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  listingTitle: {
    type: String,
    required: true,
  },
  photos: {
    type: [String], // Array of file paths or URLs
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  vehicleReg: {
    type: String,
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  specialReq: String,
  bookingFee: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
});

// Hash the password before saving the partner
partnerSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords during login
partnerSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create the Partner model
const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
