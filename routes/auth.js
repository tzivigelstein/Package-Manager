const express = require('express')
const router = express.Router()
const downloadsController = require('../controllers/downloadsController')

router.get('/api/auth', authController.downloadApk)

module.exports = router
