const Product = require('../models/Product');
const aws = require('aws-sdk');
const config = require('../config/env');
const fs = require('fs');

exports.getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    if (!products) {
      return res.status(401).json({ error: 'No products found' });
    }
    products = products.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    return res.status(200).json({ products });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, sku } = req.body;
  if (!name || !description || !sku) {
    return res.status(401).json({
      error: 'Name, description and sku are required.'
    });
  }
  if (!req.file) {
    return res.status(401).json({
      error: 'Please upload a product image.'
    });
  }
  const date = Date.now();
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: config.s3AccessKey,
    secretAccessKey: config.s3SecretAccess,
    region: config.s3Region
  });
  const s3 = new aws.S3();
  const params = {
    ACL: 'private',
    Bucket: config.s3Bucket,
    Body: fs.createReadStream(req.file.path),
    Key: `productImage/${date}-${req.file.originalname}`
  };

  s3.upload(params, async (err, data) => {
    if (err) {
      console.log('Error occurred while trying to upload to S3 bucket', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (data) {
      fs.unlinkSync(req.file.path); // Empty file folder
      const locationUrl = data.Location;
      try {
        let product = Product({
          name,
          description,
          url: locationUrl,
          sku
        });
        product = await product.save();
        product = product.toJSON();
        return res.status(200).json({ product });
      } catch (e) {
        console.log(e);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }
  });
};
