'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.User)
    }
  }
  Category.init({
    tipe: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Tipe harus di Isi"
        }
      }
    },
    sold_product_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "soldProduct harus di isi"
        },
        isInt: {
          args: true,
          msg: "Harus Memasukan Angka"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};