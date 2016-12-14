const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://gwjwfdbt:HEGBnjhyDhQEYuhQFdS4L4zavHmnWRQY@elmer.db.elephantsql.com:5432/gwjwfdbt');
module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
};

const User = require('./models/user_model.js');