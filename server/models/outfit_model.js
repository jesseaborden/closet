const Sequelize = require('../database.js').Sequelize;
const sequelize = require('../database.js').sequelize;

const Outfit = sequelize.define('outfit', {
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