const fs = require('fs')

module.exports.downloadApk = (req, res) => {
  const { package } = req.headers

  const path = `./public/apk/${package}.apk`
  if (fs.existsSync(path)) {
    const response = `http://192.168.0.10:4000/apk/${package}.apk`
    res.status(200).json({ status: 'ok', statusCode: 200, response })
  } else {
    res.status(404).json({ status: 'bad', statusCode: 404 })
  }
}
