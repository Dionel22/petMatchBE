"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const sequelize_1 = require("sequelize");
class Reviews extends sequelize_1.Model {
}
exports.Reviews = Reviews;
function reviewsModel(sequelize) {
    Reviews.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        review: {
            type: sequelize_1.DataTypes.TEXT,
            validate: {
                allowEmpty: true,
            },
        },
        totalScore: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
    }, {
        sequelize,
        paranoid: true,
        timestamps: false,
    });
    return Reviews;
}
exports.default = reviewsModel;
