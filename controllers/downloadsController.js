const fs = require('fs')
require('dotenv').config()

module.exports.downloadApk = (req, res) => {
  const { package } = req.headers

  const url = process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_URL : process.env.DEVELOPMENT_URL

  const path = `./public/apk/${package}.apk`
  if (fs.existsSync(path)) {
    const response = `${url}/apk/${package}.apk`
    res.status(200).json({ response })
  } else {
    res.status(404).json({})
  }
}
