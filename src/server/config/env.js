require("dotenv").config();

const {
  NODE_ENV,
  PORT,
  DB_MONGO,
  S3_BUCKET,
  S3_REGION,
  S3_ACCESS_KEY,
  S3_SECRET_ACCESS,
} = process.env;

module.exports = {
  env: NODE_ENV,
  port: PORT,
  dbMongo: DB_MONGO,
  s3Bucket: S3_BUCKET,
  s3Region: S3_REGION,
  s3AccessKey: S3_ACCESS_KEY,
  s3SecretAccess: S3_SECRET_ACCESS,
};
