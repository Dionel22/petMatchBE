"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersType = void 0;
const sequelize_1 = require("sequelize");
class UsersType extends sequelize_1.Model {
}
exports.UsersType = UsersType;
function usersType(sequelize) {
    UsersType.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
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
    return UsersType;
}
exports.default = usersType;
