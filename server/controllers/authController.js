const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async (req, res) =>  {
  // console.log("Hello");

    const { firstName, lastName, email, phoneNumber, address, age, bloodGroup, district, state, pincode, latitude, longitude, password, role } = req.body;
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      return res.status(400).json({ message: 'All fields are required' });
  }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName, lastName, email, phoneNumber, address, age, bloodGroup, district, state, pincode, latitude, longitude, password: hashedPassword, role
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

const registerOrganization = async (req, res) =>  {
    const { orgName, orgEmail, orgPhoneNumber , password } = req.body;
    if (!orgName || !orgEmail || !orgPhoneNumber) {
        return res.status(400).json({ message: 'All organization fields are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during login' });
    }
};

module.exports = { registerUser, registerOrganization };