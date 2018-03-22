const path = require('path')
const express = require('express')
const app = express()

const nedb = require('nedb')

const incidents = require('./modules/incidents')
const uploadToS3 = require('./modules/uploadToS3')
const userState = require('./modules/userState')

const PATH_STYLES = path.resolve(__dirname, '../app/styles')
const PATH_DIST = path.resolve(__dirname, '../dist')

app.use('/styles', express.static(PATH_STYLES))
app.use(express.static(PATH_DIST))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/index.html'))
})

/* eslint new-cap:off */
app.incidentsDB = new nedb({filename: 'db-content/incidents', autoload: true})
app.userStateDB = new nedb({filename: 'db-content/userState', autoload: true})

incidents(app)
uploadToS3(app)
userState(app)

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port

  console.log('Server is listening at %s', port)
})
