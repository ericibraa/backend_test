module.exports = (sequelize, DataTypes) => {
    const Studio = sequelize.define('studio', {
        studio_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        studio_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'studio',
        timestamps: false
    });

    return Studio;
};
