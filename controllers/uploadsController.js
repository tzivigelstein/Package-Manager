const fs = require('fs')
const multer = require('multer')

module.exports.uploadApk = (req, res) => {
  const dir = __dirname + '/../public/apk'

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  const multerConfig = {
    storage: (fileStorage = multer.diskStorage({
      destination: (req, file, callback) => callback(null, dir),
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
      return res.status(200).json({})
    } else {
      console.log(error)
      return res.status(409).json({ error })
    }
  })
}
