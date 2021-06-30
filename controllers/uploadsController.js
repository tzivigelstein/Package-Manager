const fs = require('fs')
const multer = require('multer')

module.exports.uploadApk = (req, res) => {
  const multerConfig = {
    storage: (fileStorage = multer.diskStorage({
      destination: (req, file, callback) => callback(null, __dirname + '/../public/apk'),
      filename: (req, file, callback) => {
        const packageName = `${req.headers.packagename}.apk`
        callback(null, packageName)
      },
    })),
  }

  const upload = multer(multerConfig).single('package')

  upload(req, res, async error => {
    if (!error) {
      console.log('File saved')
    } else {
      return res.status(409).json({ error })
    }
  })

  return res.status(200).json({})
}
