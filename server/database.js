const Sequelize = require('sequelize');
const database = new Sequelize('postgres://gwjwfdbt:HEGBnjhyDhQEYuhQFdS4L4zavHmnWRQY@elmer.db.elephantsql.com:5432/gwjwfdbt');
module.exports = {
  database: database,
  Sequelize: Sequelize,
};

const User = require('./models/user_model.js');
const Outfit = require('./models/outfit_model.js');

database.sync({force:true})
.then(()=>{
    console.log("DB Models Created")
});