require('dotenv').config();
const express = require('express');
const router = express.Router();

// controller
const adminCtl = require('../controller/adminController');

router.post('/login', adminCtl.adminLogin);
router.post('/end', adminCtl.endRegisterClass);

module.exports = router;