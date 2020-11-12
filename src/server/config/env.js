require('dotenv').config();

const {
  NODE_ENV,
  PORT,
  DB_MONGO
} = process.env;

module.exports = {
  env: NODE_ENV,
  port: PORT,
  dbMongo: DB_MONGO
};
