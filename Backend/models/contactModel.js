const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    enquiryType: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
  });

const ContactModel = mongoose.model('Contact', contactSchema);

module.exports = ContactModel;