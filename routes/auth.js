const express = require('express');
const { signup, signin } = require('../controller/auth');
const router = express.Router();
// const {} = require('express-validator');

router.post('/signup', signup);
router.post('/signin', signin);

module.exports = router;