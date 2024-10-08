module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('tiket', {
        ticket_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        seat_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        purchase_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        showtime_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'showtime',
                key: 'showtime_id'
            }
        }
    }, {
        tableName: 'tiket',
        timestamps: false
    });

    return Ticket;
};
