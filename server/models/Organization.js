const mongoose = require('mongoose');

// Create a Schema for the Organization
const OrganizationSchema = new mongoose.Schema({
    orgName: {
        type: String,
        required: true,   
    },
    orgEmail: {
        type: String,
        required: true,   
        unique: true,     
        lowercase: true,  
        trim: true,       
    },
    phoneNumber: {
        type: Number,
        required: true,   
    },
    password: {
        type: String,
        required: true,   
    },
    address: {
        type: String,
        required: true, 
    },
    headOfOrg: {
        type: String,
        required: true,   
    },
    latitude: {
        type: Number,
        required: true,   
    },
    longitude: {
        type: Number,
        required: true,   
    }
}, {
    timestamps: true 
});

// Create and export the Organization model
const Organization = mongoose.model('Organization', OrganizationSchema);

module.exports = Organization;
