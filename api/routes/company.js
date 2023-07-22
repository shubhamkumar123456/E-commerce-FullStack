const express=require('express');
const { adminlogin } = require('../controllers/company');
const router = express.Router();

router.post('/',adminlogin);

module.exports = router;

