const express = require('express');
const morgan = require('morgan');

// environment variables
const config = require('./config/env');

// DB connection
const connectionDB = require('./config/db');

// routes

// Initializing connection to DB
connectionDB();

// Custom middleware
//const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// 404 middleware
//app.use(notFoundHandler);

const port = config.port || 5000;

app.listen({port}, () => {
  console.log(`Server running on port ${port}`);
});


