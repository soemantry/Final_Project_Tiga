  'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransactionHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "Products",
          key: "id"
        },
        onUpdate: "CASCADE", //cascade = apbaila salah satu terhapus akan terhapus di user dan photo/saling ber relasi
        onDelete: "CASCADE" 
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE", //cascade = apbaila salah satu terhapus akan terhapus di user dan photo/saling ber relasi
        onDelete: "CASCADE" 
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      total_price: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TransactionHistories');
  }
};