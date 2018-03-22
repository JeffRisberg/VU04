const aws = require('aws-sdk')
const bodyParser = require('body-parser')

const multer = require('multer')
const multerS3 = require('multer-s3')

const S3_BUCKET_ROOT = 'aisera-document-uploads'
const S3_BUCKET_KEY_PREFIX = 'document'

let indexNum = 100

module.exports = (app) => {
  app.use(bodyParser.json())

  var s3 = new aws.S3()

  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: S3_BUCKET_ROOT, // + '/' + S3_BUCKET_KEY_PREFIX + '/' + indexNum,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname })
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      },
      ACL: 'public-read'
    })
  })

  app.post('/api/v1/tenants/:tenantId/uploadToS3', upload.array('photos', 1), function (req, res, next) {
    console.log('Successfully uploaded ' + req.files.length + ' files!')

    const result = []

    req.files.forEach((file) => {
      const fileResult = {
        id: file.key, // img,
        url: file.location // img
      }
      result.push(fileResult)
    })

    res.send(result)
    indexNum++
  })
}
