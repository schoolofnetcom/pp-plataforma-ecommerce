const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const info = require('./../../configs/info')

aws.config.update({
	secretAccessKey: info.secretAccessKey,
	accessKeyId: info.accessKeyId	
})
const s3 = new aws.S3()

let upload = multer({
	storage: multerS3({
		s3: s3,
		bucket: 'ec.products',
		acl: 'public-read-write',
		metadata: (req, file, cb) => {
			cb(null, { fieldName: file.fieldname })
		},
		key: (req, file, cb) => {
			cb(null, file.originalname)
		}
	})
})

module.exports = upload
