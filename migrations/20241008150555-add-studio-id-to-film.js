'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('film', 'studio_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'studio',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('film', 'studio_id');
  },
};
