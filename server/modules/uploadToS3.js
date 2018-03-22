const express = require('express')
const bodyParser = require('body-parser')
const AWS = require('aws-sdk')

const uploadToS3Router = express.Router({ mergeParams: true })

let indexNum = 100
module.exports = (app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }))

  uploadToS3Router.use(bodyParser.json())

  uploadToS3Router.post('/', function (req, res) {
    const tenantId = req.params.tenantId

    console.log('uploadingToS3')
    console.log(req)

    // Bucket names must be unique across all S3 users
    const myBucket = process.env.S3_BUCKET_ROOT + tenantId
    const myKey = process.env.S3_BUCKET_KEY_PREFIX + indexNum
    indexNum++

    console.log(myBucket)
    console.log(myKey)
    /*
    var s3 = new AWS.S3();

    s3.createBucket({ Bucket: myBucket }, function (err, data) {

      if (err) {
        console.log(err);
      } else {
        params = { Bucket: myBucket, Key: myKey, Body: 'Hello!' };

        s3.putObject(params, function (err, data) {
          if (err) {
            console.log(err)
          } else {
            console.log("Successfully uploaded data to myBucket/myKey");
          }
        });

      }
    })
    */

    res.status(201)
    res.send([ {
      id: 1234, //img,
      originalName: 'document', // x.name,
      fileName: 'document', // x.name,
      url: 'www.aisera.com' // img
    } ])
  })

  app.use('/api/v1/tenants/:tenantId/uploadToS3', uploadToS3Router)
}
