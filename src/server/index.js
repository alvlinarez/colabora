const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const config = require('./config/env');

// DB connection
const connectionDB = require('./config/db');

// routes
const productRoutes = require('./routes/productRoute');

// Initializing connection to DB
connectionDB();

// Custom middleware
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const isDevelopment = config.env === 'development';

const app = express();

if (isDevelopment) {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());

if (!isDevelopment) {
  app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
  });
}

app.use('/api/product', productRoutes);

// 404 middleware
app.use(notFoundHandler);

const port = !isDevelopment ? 3000 : 5000;

app.listen({ port }, () => {
  console.log(`Server running on port ${port}`);
});
