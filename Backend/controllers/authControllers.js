const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// Register a new user
exports.register = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;

    try {
        let user = await User.findOne({ email }).exec();
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ email,firstName,
            lastName, password });
        
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });

        res.status(201).json({
            token,
            user: {
                id: user._id,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

//get name of all user
exports.allUser = async(req, res) => {
    try{
        const user = await User.name.find();
        res.send(user)
    }
    catch{
        res.status(500).json({ message: 'Server error' });
    }
}

// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Password does not match", password, user.password);
            return res.status(400).json({ message: 'Wrong password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10h' });

        res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};