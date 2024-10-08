
module.exports = (sequelize, DataTypes) => {
    const Showtime = sequelize.define('showtime', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        show_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        end_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        film_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Film',
                key: 'film_id'
            }
        },
        studio_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'studio',
                key: 'studio_id'
            }
        }
    }, {
        tableName: 'showtime',
        timestamps: false
    });

    return Showtime;
};
