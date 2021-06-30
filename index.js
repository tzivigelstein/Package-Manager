const express = require('express')
const cors = require('cors')
const auth = require('./routes/download')
const uploads = require('./routes/upload')
const downloads = require('./routes/download')

const port = process.env.PORT || 4000

const app = express()

const whitelist = ['http://localhost:3000', 'https://tzivi.vercel.app']

app.use(
  cors({
    origin: whitelist,
  })
)
app.use(express.json())
app.use(express.static('public'))

app.use(auth)
app.use(uploads)
app.use(downloads)

app.listen(port, () => console.log(`Server running in port ${port}`))
