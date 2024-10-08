module.exports = (sequelize, DataTypes) => {
    const Film = sequelize.define('film', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: DataTypes.STRING,
        release_date: DataTypes.DATE,
        duration: DataTypes.INTEGER,
        studio_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'studio',
                key: 'id',
            }
        },
    }, {
        tableName: 'film',
        timestamps: false
    });

    return Film;
};
