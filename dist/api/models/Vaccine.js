"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vaccineInit = exports.Vaccine = void 0;
const sequelize_1 = require("sequelize");
class Vaccine extends sequelize_1.Model {
}
exports.Vaccine = Vaccine;
const vaccineInit = (sequelize) => {
    Vaccine.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    }, {
        sequelize,
        paranoid: true,
        updatedAt: false,
    });
};
exports.vaccineInit = vaccineInit;
