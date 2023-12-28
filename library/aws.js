const AWS = require("aws-sdk");
var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
var AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
var AWS_REGION = process.env.AWS_REGION;
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_REGION,
});

async function uploadFile(file) {
  const s3 = new AWS.S3();
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ACL: "public-read",
  };
  const data = await s3.upload(params).promise();
  return data.Location;
}

function getSignedUrl(file) {
  const s3 = new AWS.S3();
  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: file,
    Expires: 60 * 60,
  };
  const data = s3.getSignedUrl("putObject", params);
  return data;
}

module.exports = { uploadFile, getSignedUrl };