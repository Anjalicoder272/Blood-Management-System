const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // For password hashing
const validator = require('validator'); // For email validation

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: [validator.isEmail, 'Please enter a valid email'] 
    },
    phoneNumber: { 
        type: Number, 
        required: true, 
        min: [1000000000, 'Phone number must be 10 digits'], 
        max: [9999999999, 'Phone number must be 10 digits'] 
    },
    address: String,
    age: { type: Number, required: true },
    bloodGroup: String,
    district: String,
    state: String,
    Pincode: String,
    latitude: Number,
    longitude: Number,
    password: { 
        type: String, 
        required: true, 
        minlength: [6, 'Password must be at least 6 characters long'] 
    },
    role: { type: String, default: 'user' }
});

// Password hashing before saving
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Check if the model already exists to avoid overwriting it
const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
