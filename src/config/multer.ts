import multer from "multer";
import path from "path";
import crypto from "crypto";
const multerS3 = require("multer-s3");
const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client();

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"))
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(16,(err, hash) =>{
            if (err) cb(err);

            file.key = `${hash.toString('hex')}-${file.originalname}`
            cb(null, file.key)
        })
    }
  }),
  s3: multerS3({
    s3: s3,
    bucket: 'intime-bucket',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16,(err, hash) =>{
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`
        cb(null, fileName)
    })
    }
  })
}


module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
  storage: storageTypes['s3'],
  limits: {
    fileSize: 2 * 1024 * 1024,
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/png',
            'image/pjpeg',
        ];
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        } else {
            cb(new Error("Image type not allowed."))
        }
    }
  },
};
