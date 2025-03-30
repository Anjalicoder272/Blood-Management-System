const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/registeruser', authController.registerUser);
router.post('/registerorg', authController.registerOrganization);
// router.post('/login', authenticateUser, authController.login);

module.exports = router;
