const express = require('express')
const router = express.Router()
const uploadsController = require('../controllers/uploadsController')

router.post('/api/upload', uploadsController.uploadApk)

module.exports = router
