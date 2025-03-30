const express = require("express");
const app = express();
const mongoose = require("mongoose");
let bodyParser = require("body-parser");

// Environment variables setup
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Middleware setup
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static("public"));

// CORS setup (allow cross-origin requests)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes (Make sure to create specific route files)
app.use('/api/auth', require('./routes/authRoutes'));


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}`);
});
