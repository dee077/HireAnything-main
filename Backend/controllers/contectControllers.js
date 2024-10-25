const Contact = require('../models/contactModel');

exports.contact = async (req, res) => {
    const { firstName, lastName, email, phone, enquiryType, message } = req.body;
  
    try {
      const newContact = new Contact({
        firstName,
        lastName,
        email,
        phone,
        enquiryType,
        message,
      });
  
      await newContact.save();
      res.status(201).json({ message: 'Contact information saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving contact information', error });
    }
  };

  exports.allQueries = async(rew, res)=>{
    try{
        const contact = await Contact.find(); 
        res.send(contact);
    }
    catch{
        res.status(500).json({ message: 'Server error' });
    }
  }

