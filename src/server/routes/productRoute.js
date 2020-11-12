const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);

router.post(
  '/',
  multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
    'productImage'
  ),
  productController.createProduct
);

module.exports = router;
