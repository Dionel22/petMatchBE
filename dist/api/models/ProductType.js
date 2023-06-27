"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeProduct = void 0;
const sequelize_1 = require("sequelize");
class TypeProduct extends sequelize_1.Model {
}
exports.TypeProduct = TypeProduct;
function typeProductModel(sequelize) {
    TypeProduct.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        paranoid: true,
        timestamps: false,
    });
    return TypeProduct;
}
exports.default = typeProductModel;
