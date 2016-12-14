const Sequelize = require('../database.js').Sequelize;
const sequelize = require('../database.js').sequelize;

const User = sequelize.define('users', {
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