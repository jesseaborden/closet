const Sequelize = require('../database.js').Sequelize;
const database = require('../database.js').database;

const User = database.define('users', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
});

module.exports = User;