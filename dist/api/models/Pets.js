"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const sequelize_1 = require("sequelize");
class Pet extends sequelize_1.Model {
}
exports.Pet = Pet;
function petInit(sequelize) {
    Pet.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: sequelize_1.DataTypes.DOUBLE,
            validate: {
                min: 0.0,
                max: 20.0,
            },
            allowNull: false,
        },
        breed: {
            type: sequelize_1.DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
            allowNull: false,
        },
        sterilization: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            validate: {
                isUrl: true,
            },
            allowNull: false,
        },
    }, {
        sequelize,
        paranoid: true,
        updatedAt: false,
    });
}
exports.default = petInit;
