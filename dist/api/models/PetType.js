"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetType = void 0;
const sequelize_1 = require("sequelize");
class PetType extends sequelize_1.Model {
}
exports.PetType = PetType;
function petTypeInit(sequelize) {
    PetType.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        type: {
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
}
exports.default = petTypeInit;
