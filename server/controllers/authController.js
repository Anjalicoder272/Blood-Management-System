const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Organization = require("../models/Organization");

const registerUser = async (req, res) => {
  // console.log("Hello");

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    age,
    bloodGroup,
    district,
    state,
    pincode,
    latitude,
    longitude,
    password,
    role,
  } = req.body;
  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      age,
      bloodGroup,
      district,
      state,
      pincode,
      latitude,
      longitude,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "User registered successfully", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

const registerOrganization = async (req, res) => {
  try {
    const {
      orgName,
      orgEmail,
      phoneNumber,
      password,
      address,
      headOfOrg,
      latitude,
      longitude,
    } = req.body;

    // Validation
    if (
      !orgName ||
      !orgEmail ||
      !phoneNumber ||
      !address ||
      !password ||
      !headOfOrg ||
      !latitude ||
      !longitude
    ) {
      return res
        .status(400)
        .json({ message: "All organization fields are required" });
    }

    // Check if the organization email already exists
    const existingOrg = await Organization.findOne({ orgEmail });
    if (existingOrg) {
      return res
        .status(400)
        .json({ message: "Organization email already in use" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newOrganization = new Organization({
      orgName,
      orgEmail,
      phoneNumber,
      address,
      password,
      headOfOrg,
      latitude,
      longitude,
      password: hashedPassword,
    });

    await newOrganization.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newOrganization._id, role: "organization" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Return success message with token
    res.status(201).json({
      message: "Organization registered successfully",
      token,
    });
  } catch (error) {
    console.error("Error registering organization:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerOrganization };

module.exports = { registerUser, registerOrganization };
