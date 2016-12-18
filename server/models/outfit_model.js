const Sequelize = require('../database.js').Sequelize;
const database = require('../database.js').database;

const Outfit = database.define('outfit', {
    top: {
        type: Sequelize.STRING
    },
    bottom: {
        type: Sequelize.STRING
    },
    shoes: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    picture: {
        type: Sequelize.INTEGER
    }
});

module.exports = Outfit;