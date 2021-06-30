const express = require('express')
const router = express.Router()
const downloadsController = require('../controllers/downloadsController')

router.get('/api/download', downloadsController.downloadApk)

module.exports = router
