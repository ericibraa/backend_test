const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

const Film = require('./film')(sequelize, DataTypes);
const Studio = require('./studio')(sequelize, DataTypes);
const Showtime = require('./showtime')(sequelize, DataTypes);
const Ticket = require('./tiket')(sequelize, DataTypes);

Film.hasMany(Showtime);
Showtime.belongsTo(Film);
Studio.hasMany(Showtime);
Showtime.belongsTo(Studio);
Showtime.hasMany(Ticket);
Ticket.belongsTo(Showtime);

module.exports = {
    sequelize,
    Film,
    Studio,
    Showtime,
    Ticket
};
